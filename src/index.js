function updateTime() {
  //First city
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //Second city
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");

  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM D, YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

updateTime();
setInterval(updateTime, 1000);
