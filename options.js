const bookingsLink = document.getElementById("bookings_form");
const inputText = document.createElement("input");
const inputUrl = document.createElement("input");
const br = document.createElement("br");
const targetDiv = document.getElementById("link_container");
const plus = document.getElementById("plus_btn");
const minus = document.getElementById("minu_btn");

let formNum = 0;

function setUpLinks(number) {
	inputText.id = "name_" + number;
	inputText.type = "text";
	inputUrl.id = "link_" + number;
	inputUrl.type = "url";
	br.setAttribute("class", "br_" + number);
};

function postLinks() {
	targetDiv.appendChild(inputText.cloneNode(true));
	targetDiv.appendChild(br.cloneNode(true));
	targetDiv.appendChild(inputUrl.cloneNode(true));
	targetDiv.appendChild(br.cloneNode(true));
	targetDiv.appendChild(br.cloneNode(true));
};

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
	chrome.storage.sync.get(["storedUserLinks"], function(result) {
		console.log(result.storedUserLinks);
		let userLinks = result.storedUserLinks;
		console.log(userLinks.length);
		formNum = userLinks.length;
		for (let i = 0; i < userLinks.length; i++) {
			setUpLinks(i);
			inputText.value = userLinks[i].ArticleName;
			inputUrl.value = userLinks[i].ArticleURL;
			postLinks();
		}
	});
};

plus.addEventListener("click", () => {
	setUpLinks(formNum);
	inputText.value = "";
	inputUrl.value = "";
	postLinks();
	formNum++
});

minus.addEventListener("click", () => {
	if (formNum > 0) {
		formNum--;
		let targetText = document.getElementById("name_" + formNum);
		let targetUrl = document.getElementById("link_" + formNum);
		let querybr = ".br_" + formNum;
		targetText.remove();
		targetUrl.remove();
		document.querySelectorAll(querybr).forEach(br => br.remove());
	}
});