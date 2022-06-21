const teclas = [
  ["\"","1","2","3","4","5","6","7","8","9","0","-","=","del"],
  ["tab","q","w","e","r","t","y","u","i","o","p","´","[","entr"],
  ["fix","a","s","d","f","g","h","j","k","l","ç","~","]","entr"],
  ["^","\\","z","x","c","v","b","n","m",",",".",";","/","^"],
  ["Ctrl","Os","alt","space","alt Gr","Os","tecl","ctrl"]
];
var countId = 0;
var campo1 = document.querySelector("#campo1");

createTeclas = () => {
  for (var i = 0; i < 5; i++) {
    campo1.innerHTML += "<ul>";
    for (var j = 0; j < 14; j++) {
      campo1.innerHTML += `<li class="liCampo1" id="tecla${countId}">${teclas[i][j]}</li>`;
      countId++;
      if (countId > 63) j = 14; //break loop
    }
    campo1.innerHTML += "</ul>";
  }
};
createTeclas();

createEventListeners=()=>{
  var buttons = document.querySelectorAll("li");
  var textArea = document.querySelector('textarea');
  for(let i = 0; i < 63; i++){
    buttons[i].addEventListener('click',()=>{
      if (buttons[i].textContent.toString() == "space"){
        textArea.value += " ";
        console.dir(" ");
      }else if(buttons[i].textContent == "tab"){
        textArea.value += "    ";
        console.dir(" ");
      }else  {
        textArea.value += buttons[i].textContent.toString();
        console.dir(buttons[i].textContent.toString());
      }
      console.log(textArea.value);
    })
  }
}
createEventListeners();
