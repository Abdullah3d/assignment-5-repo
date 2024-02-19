function addClassById(elementId, prop) {
	document.getElementById(`${elementId}`).classList.add(`${prop}`);
}


function delClassById(elementId, prop) {
	document.getElementById(`${elementId}`).classList.remove(`${prop}`);
}


function addClass(elementId, prop) {
	elementId.classList.add(`${prop}`);
}



function delClass(elementId, prop) {
	elementId.classList.remove(`${prop}`);
}



function couponApply() {
	let couponCode = document.getElementById("coupon").value;


	if (couponCode == couponOne) {
		document.getElementById("discountPrice").innerText =
			grandTotalPriceIn.innerText * 0.15;
		grandTotalPriceIn.innerText =
			grandTotalPriceIn.innerText - grandTotalPriceIn.innerText * 0.15;


		addClassById("couponFieldIn", "hidden");
		delClassById("discount", "hidden");
		addClassById("discount", "flex");
	} else if (couponCode == couponTwo) {
		document.getElementById("discountPrice").innerText =
			grandTotalPriceIn.innerText * 0.2;
		grandTotalPriceIn.innerText =
			grandTotalPriceIn.innerText - grandTotalPriceIn.innerText * 0.2;


		addClassById("couponFieldIn", "hidden");
		delClassById("discount", "hidden");
		addClassById("discount", "flex");
	} else {
		document.getElementById("coupon").value = "";

		alert("invalid coupon");
	}
}
function input() {
	const num = `${parseInt(document.getElementById("number").value)}`;
	if (num.length === 10 && activeSeat > 0) {
		document.getElementById("next").disabled = false;
	} else if (document.getElementById("next").classList.contains("hidden")) {
		return;
	} else {
		document.getElementById("next").disabled = true;
	}
}

function submit() {
	if (
		document.getElementById("number").value &&
		document.getElementById("iName").value &&
		activeSeat > 0
	) {
		document.getElementById("header").classList.add("hidden");
		document.getElementById("ticketSell").classList.add("hidden");
		document.getElementById("offer").classList.add("hidden");
		document.getElementById("footer").classList.add("hidden");
		document.getElementById("body").classList.add("bg-[#F2F1F1]");
		my_modal_1.showModal();
	} else {
		alert("Enter name and valid number");
	}
}

function unHide() {
	document.getElementById("header").classList.remove("hidden");
	document.getElementById("ticketSell").classList.remove("hidden");
	document.getElementById("offer").classList.remove("hidden");
	document.getElementById("footer").classList.remove("hidden");
	document.getElementById("body").classList.remove("bg-[#F2F1F1]");
}