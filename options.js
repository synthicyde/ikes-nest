const bookingsLink = document.getElementById("bookings_form");

bookingsLink.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let saveLink = document.getElementById("bookings").value;
	let moveLink = {link: saveLink};
	console.log(moveLink);
	chrome.storage.sync.set({"storedUserBookings": moveLink});
	alert("Bookings link saved.")
});

window.onload = () => {
	console.log("Page reload.");
	chrome.storage.sync.get(["storedUserBookings"], function(result) {
		let userBookings = result.storedUserBookings.link;
		console.log(userBookings);
		document.getElementById("bookings").setAttribute("value", userBookings);
	});
};