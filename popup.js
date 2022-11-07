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
function pullData() {
	fetch("./userlinks.json").then((response) => {
		return response.json();
	}).then(data => {
		userLinks = data;
	}).catch((err) => {
		console.log(err);
	});
	// userLinks = data;
};

pullData();