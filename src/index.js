function updateTime() {
  //First city
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");

    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D, YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  //Second city
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");

    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM D, YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let selectedOption = event.target.options[event.target.selectedIndex];
  let city = selectedOption.textContent;

  let timezone = event.target.value;
  //   let city = event.target.textContent;
  let cityTime = moment().tz(timezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${city}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
