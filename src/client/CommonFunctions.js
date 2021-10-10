import React from "react";

function getMeals(searchText,setData) {
  const params=(searchText)?(`/${searchText}`):'';
  const uri='http://localhost:3000/api/meals'+params;
  fetch(uri)
   .then((response) => {
     if (response.ok) {
       return response.json();
     } else {
       throw new Error(response.status);
     }
   })
   .then((data) => {
     setData(data)
    });
} 

 

export default getMeals;