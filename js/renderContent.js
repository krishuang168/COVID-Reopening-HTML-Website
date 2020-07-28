async function chooseCity(city) {
  console.log("City: ", `${city}, WA`);

  const location = `${city}WA`;
  const url = `${baseUrl}/locations/SeattleArea/${location}`;

  const dataReceived = await getData(url);
  console.log("dataReceived", dataReceived);

  renderData(dataReceived);
}

/* ---------------------------------------------------------------------------- */
function renderData(data) {
  console.log("Raw data: ", data);

  // Images
  const googleLogo = `https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_Maps_icon.svg`;
  const blueCheckmark = `/images/blue_checkmark.png`;

  if (data.indexOf("city") > 0) {
    // Correct Restaurant Data
    const contentObj = JSON.parse(data);

    const restaurantList = contentObj.restaurants.map((item) => {
      let str = `<li style="list-style: none"><div>`;
      str += `<span style="font-weight: bold; font-size: 20px">${item.name} </span>`;
      str += `${
        item.verified
          ? `<img src=${blueCheckmark} style="width: 20px; vertical-align: middle"/>`
          : ``
      }<br/>`;
      str += `<a href=${item.maps} target="_blank"><em>${item.streetAddress}, ${item.city}, ${item.state}, ${item.zip}</em>
      <span>
      <img src=${googleLogo} style="width: 25px; vertical-align: top"/></a></span>`;
      str += `<p>Category: ${item.category}<br/>`;
      str += `Dine-In: ${item.dineIn === true ? "Yes" : "No"}<br/>`;
      str += `Delivery: ${item.delivery === true ? "Yes" : "No"}<br/>`;
      str += `Takeout: ${item.toGo === true ? "Yes" : "No"}`;
      str += `</p></div>`;
      str += `</li>`;

      return str;
    });

    const renderedList = restaurantList.reduce((item, init) => (init += item), "");

    const x = document.getElementById("server_response");
    x.innerHTML = `<div style="margin-left: 200px; background-image: inherite">
                  <h3>${contentObj.city}</h3>
                  <br><img src=${blueCheckmark} style="width: 20px; vertical-align: middle"/> Verified
                  <span style="display:inline; margin-bottom: 20px; justify-content: start"><p></p></span>
                  <span>${renderedList}</span>
                  </div>`;
    x.style.marginLeft = "10vw";
    x.style.marginTop = "50px";
  } else {
    // Error Message
    let err = data;

    console.log(err);
    const x = document.getElementById("server_response");
    x.innerHTML = `<span style="margin-left: 15px; background-image: inherite"><h3>${err}</h3><span>`;
    x.style.marginLeft = "20vw";
    x.style.marginTop = "50px";
  }
}
