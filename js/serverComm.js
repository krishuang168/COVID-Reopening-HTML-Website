async function getData(url, cityFullName) {
  const indexComma = cityFullName.indexOf(",");
  const city = cityFullName.slice(1, indexComma);
  const state = cityFullName.slice(indexComma + 2, cityFullName.length - 1);
  const location = city + state;
  const urlForFetch = `${url}/cities/${location}`;
  console.log("URL: ", urlForFetch);

  const response = await fetch(urlForFetch);
  const data = await response.json();
  console.log(data);
  return data;
}

/* ---------------------------------------------------------------------------- */

async function chooseCity(city) {
  dataSent = JSON.stringify(`${city}, WA`);
  console.log("dataSent", dataSent);

  try {
    const dataReceived = await getData(baseUrl, dataSent);
    console.log("dataReceived", dataReceived);

    const x = document.getElementById("server_response");
    x.innerHTML = `<h2>${dataReceived}</h2>`;
    x.style.marginLeft = "10vw";
    x.style.marginTop = "50px";
  } catch {
    (err) => {
      console.error(err);
      const x = document.getElementById("server_response");
      x.innerHTML = `<h2>${err}</h2>`;
      x.style.marginLeft = "20vw";
      x.style.marginTop = "50px";
    };
  }
}

/* ---------------------------------------------------------------------------- */

// HTML form submission
function submission() {
  document.getElementById("cityForm").submit();
  event.preventDefault();
  return form.value;
}
