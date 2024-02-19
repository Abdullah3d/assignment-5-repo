const seats = document.querySelectorAll(".seat");
const seatCountIn = document.getElementById("seatCountIn");
const seatLeftBy = document.getElementById("seatLeftBy");
const seatFieldIn = document.getElementById("seatFieldIn");
const coupon = document.getElementById("couponFieldIn");
let totalPriceBy = document.getElementById("totalPriceBy");
let grandTotalPriceIn= document.getElementById("grandTotalPriceIn");

const ticketPrice = 550;
const couponOne = "NEW15";
const couponTwo = "Couple 20";
let activeSeat = 0;

for (const seat of seats) {
	seat.addEventListener("click", function () {
		let seatFieldInElementCount =
			document.getElementById("seatFieldIn").childElementCount;
		if (activeSeat < 4 || seat.classList.contains("green")) {
			if (seat.classList.contains("green")) {
				delClass(seat, "green");
				activeSeat--;
				seatCountIn.innerText = activeSeat;
				seatLeftBy.innerText++;

				for (let i = 0; i < seatFieldInElementCount; i++) {
					if (
						Boolean(seat.classList.contains(`num_${i}`)) == true &&
						Boolean(document.getElementById(`num_${i}`)) == true
					) {
						document.getElementById(`num_${i}`).innerHTML = "";
					} else {
						continue;
					}
				}
				totalPriceBy.innerText = ticketPrice * activeSeat;
				grandTotalPriceIn.innerText = ticketPrice * activeSeat;

				if (activeSeat === 0) {
					addClassById("couponFieldIn", "hidden");
				}
			} else {
				addClass(seat, "green");
				activeSeat++;
				seatCountIn.innerText = activeSeat;
				seatLeftBy.innerText = 40 - activeSeat;
				seatFieldIn.innerHTML += `<div id="num_${seatFieldInElementCount}" class="flex justify-between"><p class="text-left">${seat.innerText}</p>
                <p class="text-center">Economoy</p>
                <p class="text-right">550</p> </div>`;
				seat.classList.add(`num_${seatFieldInElementCount}`);
				totalPriceBy.innerText = ticketPrice * activeSeat;
				grandTotalPriceIn.innerText = ticketPrice * activeSeat;

				if (activeSeat > 0) {
					delClassById("couponFieldIn", "hidden");
				}
			}
		}
	});
}