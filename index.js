const fields = ["to", "cc", "bcc", "subject", "body"];

function setupInputs() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  for (var f = 0; f < fields.length; f++) {
    if (urlParams.has(fields[f])) {
      document.getElementById(fields[f]).value = urlParams.get(fields[f]);
    }
  }
}

function makeLink() {
  const linkElement = document.getElementById("link");
  const to = document.getElementById("to").value;
  var link = `mailto:${to}?`;

  for (var f = 1; f < fields.length; f++) {
    var key = fields[f];
    var value = document.getElementById(key).value;
    if (value !== undefined && value.length > 0) {
      link += `${key}=${value}&`;
    }
  }
  link = link.slice(0, -1);

  linkElement.value = link;
  linkElement.style.height = "";
  linkElement.style.height = linkElement.scrollHeight + "px";
  document.getElementById("copy-btn").style.display = "block";
}

function copyLink() {
  const linkElement = document.getElementById("link");
  linkElement.select();
  linkElement.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  document.getElementById("copy-btn").innerHTML = "Copied!";
}

setupInputs();