const main = document.querySelectorAll(".key");

const items = [
  {
    name: "notes/notes_C.mp3",
    keys: "z",
  },
  {
    name: "notes/notes_Db.mp3",
    keys: "s",
  },
  {
    name: "notes/notes_D.mp3",
    keys: "x",
  },
  {
    name: "notes/notes_Eb.mp3",
    keys: "d",
  },
  {
    name: "notes/notes_E.mp3",
    keys: "c",
  },
  {
    name: "notes/notes_F.mp3",
    keys: "v",
  },
  {
    name: "notes/notes_Gb.mp3",
    keys: "g",
  },
  {
    name: "notes/notes_G.mp3",
    keys: "b",
  },
  {
    name: "notes/notes_Ab.mp3",
    keys: "h",
  },
  {
    name: "notes/notes_A.mp3",
    keys: "n",
  },
  {
    name: "notes/notes_Bb.mp3",
    keys: "j",
  },
  {
    name: "notes/notes_B.mp3",
    keys: "m",
  },
];
main.forEach((keys) => {
  keys.addEventListener("click", () => {
    keys.classList.add("active");
  });
  keys.addEventListener("mouseout", () => {
    keys.classList.remove("active");
  });
});
for (let i = 0; i < items.length; i++) {
  main[i].addEventListener("click", () => {
    playNote(i);
  });
}
function playNote(keys) {
  let s = new Audio(items[keys].name);
  s.currentTime = 0;
  s.play();
}
