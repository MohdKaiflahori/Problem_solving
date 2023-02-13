function convertHexa(pass) {
  let pwd = "";
  let regex = /[0-9A-Fa-f]{6}/g;
  if (!pass.match(regex)) {
    for (let i = 0; i < pass.length; i++) {
      pwd += pass.charCodeAt(i).toString(36);
      pwd += Math.floor(Math.random() * pass.length);
    }
    return pwd;
  } else {
    return pass;
  }
}
function saveJson(pass, name) {
  let obj = {};
  obj[pass] = name;
  console.log(obj);
}
saveJson(convertHexa("Anas123"), "anas");
saveJson(convertHexa("1t43252p63721d61e51f2"), "Anas");
saveJson(convertHexa("Kaif123"), "Kaif");
