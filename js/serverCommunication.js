// Fetch with the GET method
async function getData(url) {
  console.log("URL: ", url);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

/* ---------------------------------------------------------------------------- */

async function postData(url, dataSent) {
  console.log("URL: ", url);
  console.log("Data sent: ", dataSent);

  // const response =
  fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: "foo=bar&lorem=ipsum",
  })
    .then(json)
    .then(function (data) {
      console.log("Request succeeded with JSON response", data);
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });

  // const data = await response.json();
  console.log(data);
  return data;
}

/* ---------------------------------------------------------------------------- */

// HTML form submission
function submission(formID) {
  document.getElementById(formID).submit();
  event.preventDefault();
  return form.value;
}
