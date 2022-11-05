const bookingsLink = document.getElementById("bookings_form");
const portalPassSave = document.getElementById("portalpass_form");

bookingsLink.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let saveLink = document.getElementById("bookings").value;
	chrome.storage.sync.set({savedLink: saveLink}, function() {
		console.log("Bookings link saved to storage. Link saved: " + saveLink);
	})
});

portalPassSave.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let savePass = document.getElementById("portalpass").value;
	chrome.storage.sync.set({savedPass: savePass}, function() {
		console.log("Portal password saved to storage. Link saved: " + savePass);
	})
});