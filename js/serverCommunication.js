// Fetch with the GET method
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

// HTML form submission
function submission() {
  document.getElementById("cityForm").submit();
  event.preventDefault();
  return form.value;
}
