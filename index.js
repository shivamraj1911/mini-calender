const monthNameEl = document.getElementById("month-name");
const daynameEl =  document.getElementById("day-name");
const daynumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
  const month = date.getMonth()
  monthNameEl.innerText = date.toLocaleDateString("en",{
    month:"long"
  })


daynameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
})

daynumberEl.innerText = date.getdate()
 yearEl.innerText = date.getFullYear