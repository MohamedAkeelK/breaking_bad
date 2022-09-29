let data = [];

function switchChar() {
  data.forEach((elem) => {
    // console.log(elem.name);
    // let content = document.querySelector(".content");

    content.innerHTML = `
      <div class="left-box">
    <h3>${elem.name}</h3>
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/51452416593349.562ae7548a949.jpg" width="150px" alt="" srcset="">
  </div>
  <div class="right-box">
    <ul>
      <li>Name: </li>
      <li>Birthday: </li>
      <li>Occupation: </li>
      <li>status: </li>
      <li>nickname: </li>
      <li>portrayed: </li>
    </ul>
  </div>
    `;

    // let main = document.querySelector("main");
  });
}

// API
async function callApi(ui) {
  let response = await axios("https://www.breakingbadapi.com/api/" + ui);
  data = [...response.data];
  if (ui === "characters") {
    switchChar();
  }
  // console.log(data);

  // } else if (ui === "quotes") {
  //   response.data.forEach((elem) => {
  //     console.log(elem);
  //     let content = document.createElement("div");
  //     let main = document.querySelector("main");

  //     content.classList.add("content");
  //     // DYNAMIC HTML
  //     content.innerHTML = `
  //   <div>
  //     <h3>${elem.quote}</h3>
  //   </div>
  //   `;
  //     main.append(content);
  //   });
  // }
}

//  TABS CLICK EVENT
let prev_target = "";
let tab = document.querySelectorAll(".tab");
tab.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    console.log("clicked");
    if (!document.querySelector(".content")) {
      console.log("hot2");
      if (e.target.innerText !== prev_target) {
        prev_target = e.target.innerText;
        callApi(e.target.innerText);
      }
    }
  });
});

// if (ui === "characters") {
//   response.data.forEach((elem) => {
//     let content = document.createElement("div");
//     let main = document.querySelector("main");

//     content.classList.add("content");
//     // DYNAMIC HTML
//     content.innerHTML = `
//   <div class="left-box">
//     <h3>${elem.name}</h3>
//     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/51452416593349.562ae7548a949.jpg" width="150px" alt="" srcset="">
//   </div>
//   <div class="right-box">
//     <ul>
//       <li>Name: </li>
//       <li>Birthday: </li>
//       <li>Occupation: </li>
//       <li>status: </li>
//       <li>nickname: </li>
//       <li>portrayed: </li>
//     </ul>
//   </div>
//   `;
//     main.append(content);
//   });


