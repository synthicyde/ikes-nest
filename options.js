const bookingsLink = document.getElementById("bookings_form");
const portalPassSave = document.getElementById("portalpass_form");
let saves = {};
function addToSaves(key, value) {
	saves[key] = value;
};
function loadInfo() {
	if (saves != {}) {
		console.log(saves["link"]);
		console.log(saves["portalPass"]);
	} else {
		chrome.storage.sync.get(saves, () => {
			console.log(saves);
			console.log(saves[0]);
			console.log(saves[1]);
		})
	}
};

bookingsLink.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let saveLink = document.getElementById("bookings").value;
	addToSaves("link", saveLink);
	console.log(saves);
	chrome.storage.sync.set(saves);
	//chrome.storage.sync.set({savedLink: saveLink}, function() {
	//	console.log("Bookings link saved to storage. Link saved: " + saveLink);
	//})
});

portalPassSave.addEventListener("submit", (submission) => {
	submission.preventDefault();
	let savePass = document.getElementById("portalpass").value;
	addToSaves("portalPass", savePass);
	console.log(saves);
	chrome.storage.sync.set(saves);
	//chrome.storage.sync.set({savedPass: savePass}, function() {
	//	console.log("Portal password saved to storage. Link saved: " + savePass);
	//})
});

window.onload = () => {
	console.log("Page reload.");
	loadInfo();
	//chrome.storage.sync.get(["savedLink"], () => {
	//	console.log(["savedLink"]);
	//});
	//chrome.storage.sync.get(["savedPass"]);
	//console.log("Pulled " + saveLink + savePass);
};