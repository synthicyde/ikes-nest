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
function pullData(data) {
	userLinks = data;
};

fetch("./userlinks.json").then((response) => {
	return response.json();
}).then(data => {
	console.log(data);
}).catch((err) => {
	console.log(err);
});

console.log(userLinks);