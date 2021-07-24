fetch("./pages/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  }).catch(error => {
    console.log(error)
    });

fetch("./pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  }).catch(error => {
    console.log(error)
    });

