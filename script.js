const content = document.getElementById("content");

function createDays(nOfDays) {
  for (let i = 1; i <= nOfDays; i++) {
    const day = document.createElement("div");
    day.setAttribute("class", `day ${i}`);

    const dayOfTheMonth = document.createElement("div");
    dayOfTheMonth.setAttribute("class", "day-of-the-month");
    const p = document.createElement("p");
    p.innerText = i;
    dayOfTheMonth.appendChild(p);
    day.appendChild(dayOfTheMonth);

    const habitOne = document.createElement("div");
    habitOne.innerText = ".";
    habitOne.setAttribute("class", "habit-one");
    day.appendChild(habitOne);

    const habitTwo = document.createElement("div");
    habitTwo.innerText = ".";
    habitTwo.setAttribute("class", "habit-two");
    day.appendChild(habitTwo);

    const habitThree = document.createElement("div");
    habitThree.innerText = ".";
    habitThree.setAttribute("class", "habit-three");
    day.appendChild(habitThree);

    content.appendChild(day);
  }
}

createDays(31);
