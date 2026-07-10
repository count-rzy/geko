from django.urls import path

from .views import (
    book_list,
    book_detail,
    search_books,
    largest_book,
    statistics,
)

urlpatterns = [
    path("books/", book_list, name="book-list"),
    path("books/<int:pk>/", book_detail, name="book-detail"),
    path("books/search/", search_books, name="search-books"),
    path("books/largest/", largest_book, name="largest-book"),
    path("books/statistics/", statistics, name="statistics"),
]