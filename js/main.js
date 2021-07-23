fetch("../pages/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("../pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });


/*   fetch("https://api.rawg.io/api/games", {
	"method": "GET",
	"headers": {
		"key": "e8f22aff13234fa89a4900057d0921cc",
		"ordering": "-rating"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); */