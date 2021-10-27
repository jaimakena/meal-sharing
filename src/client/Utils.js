

export function getMeals(searchText,setData) {
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

export function getReservationCount(id, setData) {
  const uri = 'http://localhost:3000/api/reservations/count/' + id;
  fetch(uri).then((response) => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error(response.status);
      }
  }).then((data) => {
      if (data) {
          setData(data[0].count);
      }
  });
}

export function getReviews(id, setData) {
  const uri = 'http://localhost:3000/api/reviews/' + id;
  fetch(uri).then((response) => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error(response.status);
      }
  }).then((data) => {
      if (data) {
          setData(data);
      }
  });
}

export const pics=
[
'https://img.taste.com.au/qauY2Lmp/w643-h428-cfill-q90/taste/2016/11/spaghetti-bolognese-106560-1.jpeg',
'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-12-1536x951.jpg',
'https://flavorthemoments.com/wp-content/uploads/2019/07/grilled-bbq-chicken-3-600x863.jpg',
'https://www.killingthyme.net/wp-content/uploads/2020/09/veggie-deluxe-pizza-5.jpg',
'https://www.crumbsonthetable.co.uk/wordpress/wp-content/uploads/2016/07/RODGROTMEDFLOTE.jpg',
'https://www.onekitchenblog.com/wp-content/uploads/2018/09/IMG_1256.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZNdVqkwM0XISTQQbkhSWIdmrBxwKA-U0Cw&usqp=CAU'
]


