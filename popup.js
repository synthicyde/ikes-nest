//global variables
const div = document.createElement("div");
const li = document.createElement("li");
const a = document.createElement("a");
const h1 = document.createElement("h1");
const p = document.createElement("p");

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

chrome.storage.sync.get(["storedUserPortalPass"], function(result) {
	let portalPass = result.storedUserPortalPass.password;
	const body = document.getElementById("mainbody");
	div.id = "portalpass";
	h1.id = "portalh1"
	p.id = "portaltext"
	body.appendChild(div.cloneNode(true));
	document.getElementById("portalpass").appendChild(h1.cloneNode(true));
	document.getElementById("portalh1").innerHTML = "Current Portal Pass"
	document.getElementById("portalpass").appendChild(p.cloneNode(true));
	if (portalPass != "") {
		document.getElementById("portaltext").innerHTML = portalPass;
	} else {
		document.getElementById("portaltext").innerHTML = "Set portal password in options";
	};
});