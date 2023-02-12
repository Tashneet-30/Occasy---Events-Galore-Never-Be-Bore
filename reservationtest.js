

// console.log(le)




document.getElementById("bookBtn").addEventListener("click", function() {
    var totalSeats = 50;
    var LeftSeats = Number.parseInt(localStorage.getItem("n"))
    let seatsToBook = document.getElementById("seatsToBook").value;

    if (LeftSeats >= seatsToBook) {

      localStorage.setItem("n",LeftSeats - seatsToBook)

      console.log(localStorage.getItem("n"))
      // document.getElementById("booked").innerHTML = bookedSeats + 1;
      // document.getElementById("available").innerHTML = totalSeats - bookedSeats - 1;
    } else {
      console.log(LeftSeats,seatsToBook)
      alert("No more seats available");
    }
  });
