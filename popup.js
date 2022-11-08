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
	}).catch((err) => {
		console.log(err);
	});
};

createUserLinks();