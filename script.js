// Data khodam
const khodams = [
  { name: "Anthony Martial", image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/12/14/3271612-66949508-2560-1440.jpg" },
  { name: "David Bellion", image: "https://i.pinimg.com/736x/ba/24/47/ba244774345daef60cdb31bbe230e2b9.jpg" },
  { name: "Andre Onana", image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/24/3811232-77476568-2560-1440.jpg" },
{ name: "Andre Onana", image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/24/3811232-77476568-2560-1440.jpg" },
{ name: "Andre Onana", image: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/24/3811232-77476568-2560-1440.jpg" },
  { name: "Anthony", image: "https://i.ytimg.com/vi/_mPDAQm58i8/maxresdefault.jpg" }
];

// Fungsi untuk mendapatkan khodam acak
function getKhodam() {
  const nameInput = document.getElementById('nameInput').value;
  const resultDiv = document.getElementById('result');

  if (nameInput.trim() === "") {
    alert("Masukkan nama terlebih dahulu");
    return;
  }

  const randomIndex = Math.floor(Math.random() * khodams.length);
  const chosenKhodam = khodams[randomIndex];

  resultDiv.innerHTML = `
    <h2>Khodam ${nameInput} adalah ${chosenKhodam.name}</h2>
    <img src="${chosenKhodam.image}" alt="${chosenKhodam.name}">
  `;
}
