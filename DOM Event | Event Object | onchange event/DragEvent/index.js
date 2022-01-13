const div=document.querySelector("div");
const p =document.querySelector("p");

p.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("Text", e.target.id);//akhane data ta key value hishebe sand kora hoyeche jemon Text hocche key and ai key ar value hocce e.target.id
});

div.addEventListener("dragover",function(e){ //akhane kar opor drag kore rakha hobe ta set kora hoyeche...jemon akhane div ar opor rakha hobe
    e.preventDefault();
});

div.addEventListener("drop",function(e){ //akhane key value received kora hoyeche.....va key value ke drop kora hoyeche div ar opor
    let id = e.dataTransfer.getData("Text");//akhane sand kora  key take received kora hoyeche
    //console.log(id); //akhane console a chack kora hoyeche je amra amder kankhito id ta peyechi ki na
    div.appendChild(document.getElementById(id)); //akhane div ar sathe p ar id ke append ba jog kora hoyeche
    e.preventDefault(); //akhane e event ar default proparti bondho kora hoyeche jate amader code ta thikh thak vabe kaj kore
});