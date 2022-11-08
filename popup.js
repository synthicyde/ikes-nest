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

// const targetUserLinks = document.getElementById("user_links");
// const li = document.createElement("li");
// const a = document.createElement("a");

function createUserLinks() {
	fetch("./userlinks.json").then((response) => {
		return response.json();
	}).then(data => {
		userLinks = data;
		for (let i = 0; i < userLinks.length; i++) {
			const targetUserLinks = document.getElementById("user_links");
			const li = document.createElement("li");
			const a = document.createElement("a");
			li.id = "user-link-" + i;
			let target = "user-link-" + i;
			a.innertext = userLinks[i].ArticleName;
			// a.setAttribute("href", userLinks[i]);
			// a.setAttribute("target", userLinks[i]);
			console.log(a);
			targetUserLinks.appendChild(li.cloneNode(true));
			let targetLi = document.getElementById(target);
			targetLi.appendChild(a.cloneNode(true));
		};
	}).catch((err) => {
		console.log(err);
	});
};

createUserLinks();