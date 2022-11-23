//global variables
const div = document.createElement("div");
const li = document.createElement("li");
const a = document.createElement("a");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const portalPassSave = document.getElementById("portal_pass_form");
// const newversion = document.getElementById("newversionnotif");

// Let's the logos at the top lead to the care site
ike_button.addEventListener("click", async () => {
    chrome.tabs.create({
	    url: "https://care.icims.com/s/"
	})
});

logo.addEventListener("click", async () => {
	chrome.tabs.create({
		url: "https://care.icims.com/s/"
	})
});

let userLinks = [];

function postUserLinks() {
	for (let i = 0; i < userLinks.length; i++) {
		const targetUserLinks = document.getElementById("user_links");
		li.id = "user-link-" + i;
		let targetDiv = "user-link-" + i;
		a.id = "user-link-actual-" + i;
		let targetLink = "user-link-actual-" + i;
		targetUserLinks.appendChild(li.cloneNode(true));
		let targetLi = document.getElementById(targetDiv);
		targetLi.appendChild(a.cloneNode(true));
		document.getElementById(targetLink).innerHTML = userLinks[i].ArticleName;
		document.getElementById(targetLink).href = userLinks[i].ArticleURL;
		document.getElementById(targetLink).target = userLinks[i].target;
	};
};

chrome.storage.sync.get(["storedUserLinks"], function(result) {
	userLinks = result.storedUserLinks;
	postUserLinks();
});

chrome.storage.sync.get(["storedUserBookings"], function(result) {
	let bookingsLink = result.storedUserBookings.link;
	const otherLinks = document.getElementById("other_links");
	li.id = "bookings_li";
	a.id = "bookings_a"
	otherLinks.appendChild(li.cloneNode(true));
	if (bookingsLink != "") {
		document.getElementById("bookings_li").appendChild(a.cloneNode(true));
		document.getElementById("bookings_a").innerHTML = "Bookings Link";
		document.getElementById("bookings_a").href = bookingsLink;
		document.getElementById("bookings_a").target = "_blank"
	} else {
		document.getElementById("bookings_li").appendChild(a.cloneNode(true));
		document.getElementById("bookings_a").innerHTML = "Set bookings link in options";
	};
});

window.onload = () => {
	chrome.storage.sync.get(["storedUserPortalPass"], function(result) {
		let userPortalPass = result.storedUserPortalPass.password;
		document.getElementById("portal_pass").setAttribute("value", userPortalPass)
		if (userPortalPass != "") {
			document.getElementById("portal_pass_btn").value = "Update"
		} else {
			document.getElementById("portal_pass_btn").value = "Save"
		};
	});
};

portalPassSave.addEventListener("submit", (submission) => {
	let savePass = document.getElementById("portal_pass").value;
	let movePass = {password: savePass};
	console.log(movePass);
	chrome.storage.sync.set({"storedUserPortalPass": movePass});
});

document.getElementById("search_care_site_form").addEventListener("submit", () => {
	chrome.tabs.create({
		url: "https://care.icims.com/s/global-search/" + document.getElementById("search_query").value
	})
});

// document.addEventListener("click", () => {
// 	newversion.style.opacity = 0;
// 	setTimeout(() => {
// 		newversion.remove();
// 	}, 150)
// });