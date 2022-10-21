let dom = document.getElementById("dom");
let tab0 = document.getElementById("tab0");
let tab1 = document.getElementById("tab1");

let main = document.getElementById("main");
let main2 = document.getElementById("main2");

const news = () => {
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "6d96562304mshadc2c63189e167dp198697jsneb997d8abdb3",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  fetch(
    "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
    options
  )
    .then((response) => response.json())
    // console.log(response)

    .then((data) => {
      data.value.map((news, i) => {
        // console.log(news)
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        img.src = news.image.thumbnail.contentUrl
          .replace("&pid=News", "")
          .replace("pid=News&", "")
          .replace("pid=News", "");

        let title = document.createElement("div");
        title.setAttribute("class", "title");
        title.innerHTML = `<span>Card Title :</br>${news.description}</span>`;

        let url = document.createElement("div");
        url.setAttribute("class", "an");
        url.innerHTML = `<a href="${news.url}}" target="blank">See more</a>`;

        card.appendChild(img);

        card.appendChild(title);

        card.appendChild(url);

        main.appendChild(card);

        dom.appendChild(main);
      });
    })
    .catch((err) => console.error(err));
};

const stopNews = () => {
  dom.removeChild(main);
};
const addNews = () => {
  dom.appendChild(main);
  dom.removeChild(main2);
};

let btn = document.createElement("i");
btn.setAttribute("class", "bi bi-x-square-fill");
btn.setAttribute("id", "closeBtn");
btn.setAttribute("onclick", "addNews()");
main2.appendChild(btn);

const searchNews = () => {
  // window.stop(news());

  let userInput = document.querySelector("#userInput").value;
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "6d96562304mshadc2c63189e167dp198697jsneb997d8abdb3",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=${userInput}&freshness=Day&textFormat=Raw&safeSearch=Off`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      data.value.map((news, i) => {
        // console.log(news)
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        img.src = news.image.thumbnail.contentUrl
          .replace("&pid=News", "")
          .replace("pid=News&", "")
          .replace("pid=News", "");

        let title = document.createElement("div");
        title.setAttribute("class", "title");
        title.innerHTML = `<span>Card Title :</br>${news.description}</span>`;

        let url = document.createElement("div");
        url.setAttribute("class", "an");
        url.innerHTML = `<a href="${news.url}}" target="blank">See more</a>`;

        card.appendChild(img);

        card.appendChild(title);

        card.appendChild(url);

        main2.appendChild(card);

        dom.appendChild(main2);
      });
    })
    .catch((err) => console.error(err));
};

window.onload = news();

const cltesla = () => {
  let teslaDiv = document.getElementById("tab0");
  teslaDiv.style.display = "none";
};
const clapple = () => {
  let teslaDiv = document.getElementById("tab1");
  teslaDiv.style.display = "none";
};

//     try {
//         let url ="https://newsapi.org/v2/everything?q=apple&from=2022-09-23&to=2022-09-23&sortBy=popularity&apiKey=838cf08b76894bd7974ceaf959156a65"
//         let news = await fetch(url)

//         if (news) {
//             news.json().then(value => {
//                 // console.log(value.articles)
//                 for (let key in value.articles) {
//                     let card = document.createElement("div")
//                     card.setAttribute("class", "card")

//                     let img = document.createElement("img")
//                     img.src = value.articles[key].urlToImage

//                     let title = document.createElement("div")
//                     title.setAttribute("class","title")
//                     title.innerHTML =   `<span>Card Title :</br>${value.articles[key].title}</span>`

//                     let url = document.createElement("div")
//                     url.setAttribute("class","an")
//                     url.innerHTML = `<a href="${value.articles[key].url}" target="blank">See more</a>`

//                     card.appendChild(img)
//
//                     card.appendChild(title)
//
//                     card.appendChild(url)

//                     main2.appendChild(card)
//
//                 }

//             })

//         }

//     } catch (error) {
//        console.log(error)
//     }
// }
