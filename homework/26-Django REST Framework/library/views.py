from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Avg, Sum
from .models import Book
from .serializers import BookSerializer


@api_view(["GET", "POST"])
def book_list(request):

    if request.method == "GET":

        books = Book.objects.all()

        if books.exists():
            serializer = BookSerializer(books, many=True)
            return Response(serializer.data)

        return Response(
            {"message": "Books not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = BookSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(["GET", "PUT", "DELETE"])
def book_detail(request, pk):

    try:
        book = Book.objects.get(pk=pk)
    except Book.DoesNotExist:
        return Response(
            {"message": "Book not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    if request.method == "GET":
        serializer = BookSerializer(book)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = BookSerializer(book, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    book.delete()

    return Response(
        {"message": "Book deleted successfully"},
        status=status.HTTP_204_NO_CONTENT
    )

@api_view(["GET"])
def search_books(request):
    author = request.GET.get("author")

    if not author:
        return Response(
            {"message": "Author parameter is required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    books = Book.objects.filter(author__icontains=author)

    serializer = BookSerializer(books, many=True)

    return Response(serializer.data)

@api_view(["GET"])
def largest_book(request):

    book = Book.objects.order_by("-pages").first()

    if not book:
        return Response(
            {"message": "Books not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = BookSerializer(book)

    return Response(serializer.data)

@api_view(["GET"])
def statistics(request):

    books = Book.objects.all()

    data = {
        "total_books": books.count(),
        "total_pages": books.aggregate(Sum("pages"))["pages__sum"] or 0,
        "average_pages": books.aggregate(Avg("pages"))["pages__avg"] or 0,
        "available_books": books.filter(is_available=True).count(),
        "unavailable_books": books.filter(is_available=False).count(),
    }

    return Response(data)