// Fetch with the GET method
async function getData(url) {
  console.log("URL: ", url);

  const response = await fetch(url);
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
