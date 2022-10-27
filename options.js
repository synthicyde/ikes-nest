const bookingsLink = document.getElementById("bookings_form");
const portalPassSave = document.getElementById("portalpass_form");

bookingsLink.addEventListener("submit", (submission) => {
	submission.preventDefault();
	console.log("Bookings link saved.");
});

portalPassSave.addEventListener("submit", (submission) => {
	submission.preventDefault();
	console.log("Portal password saved.");
});