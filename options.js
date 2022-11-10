const bookingsLink = document.getElementById("bookings_form");
const portalPassSave = document.getElementById("portalpass_form");
// let saves = {};
// function addToSaves(key, value) {
// 	saves[key] = value;
// };
// function loadInfo() {
// 	if (saves != {}) {
// 		console.log(saves["link"]);
// 		console.log(saves["portalPass"]);
// 	} else {
// 		chrome.storage.sync.get(saves, () => {
// 			console.log(saves);
// 			console.log(saves[0]);
// 			console.log(saves[1]);
// 		})
// 	}
// };

bookingsLink.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let saveLink = document.getElementById("bookings").value;
	let moveLink = {link: saveLink};
	console.log(moveLink);
	chrome.storage.sync.set({"storedUserBookings": moveLink});
});

portalPassSave.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let savePass = document.getElementById("portalpass").value;
	let movePass = {password: savePass};
	console.log(movePass);
	chrome.storage.sync.set({"storedUserPortalPass": movePass});
});

window.onload = () => {
	console.log("Page reload.");
	chrome.storage.sync.get(["storedUserBookings"], function(result) {
		let userBookings = result.storedUserBookings.link;
		console.log(userBookings);
		document.getElementById("bookings").setAttribute("value", userBookings);
	});
	chrome.storage.sync.get(["storedUserPortalPass"], function(result) {
		let userPortalPass = result.storedUserPortalPass.password;
		console.log(userPortalPass);
		document.getElementById("portalpass").setAttribute("value", userPortalPass)
	});
};