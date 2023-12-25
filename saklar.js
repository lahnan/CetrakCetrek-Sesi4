function saklar() {
  // Saklar Keluarga
  let keluarga = document.getElementById("keluarga");

  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");
  let makan = document.getElementById("makan");
  let tidur = document.getElementById("alltidur");
  let stid1 = document.getElementById("stid1");
  let stid2 = document.getElementById("stid2");
  let st1 = document.getElementById("st1");
  let st2 = document.getElementById("st2");
  let st3 = document.getElementById("st3");
  let st4 = document.getElementById("st4");
  let tamuall = document.getElementById("tamuall");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lmakan = document.getElementById("lmakan");
  let ltid1 = document.getElementById("tid1");
  let ltid2 = document.getElementById("tid2");
  let t1 = document.getElementById("t1");
  let t2 = document.getElementById("t2");
  let t3 = document.getElementById("t3");
  let t4 = document.getElementById("t4");

  if (keluarga.checked) {
    console.log("1");
  } else {
    console.log("0");
  }

  if (toggle1.checked) {
    lampu1.src = "asset/images/on.gif";
  } else if (keluarga.checked) {
    lampu1.src = "asset/images/on.gif";
  } else {
    lampu1.src = "asset/images/off.gif";
  }
  if (toggle2.checked) {
    lampu2.src = "asset/images/on.gif";
  } else if (keluarga.checked) {
    lampu2.src = "asset/images/on.gif";
  } else {
    lampu2.src = "asset/images/off.gif";
  }
  if (toggle3.checked) {
    lampu3.src = "asset/images/on.gif";
  } else if (keluarga.checked) {
    lampu3.src = "asset/images/on.gif";
  } else {
    lampu3.src = "asset/images/off.gif";
  }

  // saklar makan
  if (makan.checked) {
    lmakan.src = "asset/images/on.gif";
  } else {
    lmakan.src = "asset/images/off.gif";
  }

  // saklar tidur
  if (stid1.checked) {
    ltid1.src = "asset/images/on.gif";
  } else if (tidur.checked) {
    ltid1.src = "asset/images/on.gif";
  } else {
    ltid1.src = "asset/images/off.gif";
  }
  if (stid2.checked) {
    ltid2.src = "asset/images/on.gif";
  } else if (tidur.checked) {
    ltid2.src = "asset/images/on.gif";
  } else {
    ltid2.src = "asset/images/off.gif";
  }

  // saklar tamu
  if (st1.checked) {
    t1.src = "asset/images/on.gif";
  } else if (tamuall.checked) {
    t1.src = "asset/images/on.gif";
  } else {
    t1.src = "asset/images/off.gif";
  }
  if (st2.checked) {
    t2.src = "asset/images/on.gif";
  } else if (tamuall.checked) {
    t2.src = "asset/images/on.gif";
  } else {
    t2.src = "asset/images/off.gif";
  }
  if (st3.checked) {
    t3.src = "asset/images/on.gif";
  } else if (tamuall.checked) {
    t3.src = "asset/images/on.gif";
  } else {
    t3.src = "asset/images/off.gif";
  }
  if (st4.checked) {
    t4.src = "asset/images/on.gif";
  } else if (tamuall.checked) {
    t4.src = "asset/images/on.gif";
  } else {
    t4.src = "asset/images/off.gif";
  }
}
