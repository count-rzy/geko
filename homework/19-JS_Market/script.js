const orders = [ {    
 id: 1,
 user: "Ivan",
 items: [ { name: "Laptop", price: 1200, qty: 1 }, 
          { name: "Mouse", price: 25, qty: 2 }   ],   
 status: "pending",    
 createdAt: "2026-04-28"  },  
 
 { 
    id: 2, 
    user: "Anna",  
    items: [ { name: "Phone", price: 800, qty: 1 }   ],    
    status: "completed",    
    createdAt: "2026-04-20"  },  

{    id: 3,   
     user: "Gevorg",   
     items: [ { name: "Keyboard", price: 100, qty: 1 }   ],   
     status: "pending",  
     createdAt: "2026-04-29"  }];

     //function 1//
function calculateTotalByUser(orders){

   const result={};

   orders.forEach(order=>{
    let sum=0;
    order.items.forEach(item=>{
        sum+=item.price*item.qty;
    })

        if(result[order.user]){
            result[order.user]+=sum;
        }
        else{
            result[order.user]=sum;
        }
   })
   return result;
}

console.log(calculateTotalByUser(orders));

//function 2//
function getUserPendingOrders(orders, username){
 return  orders.filter(order =>
    order.user === username && order.status === "pending"
  )
}

console.log(getUserPendingOrders(orders,"Ivan"))

//function 3//
function getTotalRevenue(orders){
    let total=0;
    orders.forEach(order=>{
        if(order.status==="completed")
        order.items.forEach(i=>{
        total+=i.price*i.qty;
        })
    })
    return total;
}
console.log(getTotalRevenue(orders));


//function 4//
     function groupOrdersByUser(orders){
  return orders.reduce((result, order) => {

    if(!result[order.user]){
      result[order.user] = [];
    }

    result[order.user].push(order);

    return result;
  });
}

console.log(groupOrdersByUser(orders))


//function 5//
function getTopUsers(orders, topN){

  const totals = {};

  orders.forEach(order => {
    if(order.status === "completed"){
      const sum = calculateTotalByUser(orders);

      if(!totals[order.user]){
        totals[order.user] = 0;
      }

      totals[order.user] += sum;
    }
  });

  const result = Object.entries(totals).map(([user, total]) => ({
    user,
    total
  }));

  result.sort((a, b) => b.total - a.total);
  return result.slice(0, topN);
}
console.log(getTopUsers(orders, 2));