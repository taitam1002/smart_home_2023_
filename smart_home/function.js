window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
function changeRoom(roomId) {
// Ẩn tất cả các phần nội dung
var rooms = document.getElementsByClassName("room");
for (var i = 0; i < rooms.length; i++) {
  rooms[i].classList.remove("active");
}
// Hiển thị phần nội dung tương ứng với mục được chọn
var room = document.getElementById("room" + roomId);
room.classList.add("active");
}  

document.addEventListener('DOMContentLoaded', function() {

//phòng khách
var btn1State = localStorage.getItem('a');
var btn2State = localStorage.getItem('btn2State');
var btn3State = localStorage.getItem('btn3State');
var btn9State = localStorage.getItem('btn9State');
var btn10State = localStorage.getItem('btn10State');
var btn11State = localStorage.getItem('btn11State');


if (btn1State === null) {
  btn1State = 'false';
  localStorage.setItem('btn1State', btn1State);
}

if (btn9State === null) {
  btn9State = 'false';
  localStorage.setItem('btn9State', btn9State);
}

if (btn2State === null) {
  btn2State = 'false';
  localStorage.setItem('btn2State', btn2State);
}

if (btn10State === null) {
  btn10State = 'false';
  localStorage.setItem('btn10State', btn10State);
}
if (btn3State === null) {
  btn3State = 'false';
  localStorage.setItem('btn3State', btn3State);
}

if (btn11State === null) {
  btn11State = 'false';
  localStorage.setItem('btn11State', btn11State);
}

document.getElementById('btn1').addEventListener('click', function() {
  // Bật btn1 và tắt btn9
  btn1State = '1';
  btn9State = '0';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn1State', btn1State);
  localStorage.setItem('btn9State', btn9State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn1fire = firebase.database().ref('Livingroom').child('Device').update({
    Fan: btn1State,
  });
  

  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn9').classList.remove('btn_color');
  document.getElementById('fan').src = 'img/fan_running.png';
});

document.getElementById('btn9').addEventListener('click', function() {
  // Bật btn9 và tắt btn1
  btn1State = '0';
  btn9State = '1';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn1State', btn1State);
  localStorage.setItem('btn9State', btn9State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn1fire = firebase.database().ref('Livingroom').child('Device').update({
    Fan: btn1State,
  });
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn1').classList.remove('btn_color');
  document.getElementById('fan').src = 'img/fan.png';
});
  // Lắng nghe sự thay đổi trên cơ sở dữ liệu Firebase
firebase.database().ref('Livingroom').child('Device').on('value', function(snapshot) {
var fanStatus = snapshot.val();

if (fanStatus.Fan === '1') {
  // Bật btn1 và tắt btn9
  document.getElementById('btn1').classList.add('btn_color');
  document.getElementById('btn9').classList.remove('btn_color');
  document.getElementById('fan').src = 'img/fan_running.png';
} else if (fanStatus.Fan === '0') {
  // Bật btn9 và tắt btn1
  document.getElementById('btn9').classList.add('btn_color');
  document.getElementById('btn1').classList.remove('btn_color');
  document.getElementById('fan').src = 'img/fan.png';
}

});
/// btn2 bnt10  
document.getElementById('btn2').addEventListener('click', function() {
  // Bật btn2 và tắt btn10
  btn2State = '1';
  btn10State = '0';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn2State', btn2State);
  localStorage.setItem('btn10State', btn10State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn2fire = firebase.database().ref('Livingroom').child('Device').update({
    Light: btn2State,
  });
  

  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn10').classList.remove('btn_color');
  document.getElementById('bulb').src = 'img/light_on.png';
});

document.getElementById('btn10').addEventListener('click', function() {

  btn2State = '0';
  btn10State = '1';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn2State', btn2State);
  localStorage.setItem('btn10State', btn10State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn2fire = firebase.database().ref('Livingroom').child('Device').update({
    Light: btn2State,
  });
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn2').classList.remove('btn_color');
  document.getElementById('bulb').src = 'img/light_bulb.png';
});
  // Lắng nghe sự thay đổi trên cơ sở dữ liệu Firebase
firebase.database().ref('Livingroom').child('Device').on('value', function(snapshot) {
var lightStatus = snapshot.val();

if (lightStatus.Light === '1') {
  // Bật btn2 và tắt btn10
  document.getElementById('btn2').classList.add('btn_color');
  document.getElementById('btn10').classList.remove('btn_color');
  document.getElementById('bulb').src = 'img/light_on.png';
} else if (lightStatus.Light === '0') {
  // Bật btn10 và tắt btn2
  document.getElementById('btn10').classList.add('btn_color');
  document.getElementById('btn2').classList.remove('btn_color');
  document.getElementById('bulb').src = 'img/light_bulb.png';
}
  
});

// btn3 btn11
document.getElementById('btn3').addEventListener('click', function() {
  // Bật btn3 và tắt btn111
  btn3State = '1';
  btn11State = '0';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn3State', btn3State);
  localStorage.setItem('btn11State', btn11State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn3fire = firebase.database().ref('Livingroom').child('Device').update({
    Air: btn3State,
  });
  

  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn11').classList.remove('btn_color');
  document.getElementById('airfilter').src = 'img/air_filter.png';
});

document.getElementById('btn11').addEventListener('click', function() {
  btn3State = '0';
  btn11State = '1';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn3State', btn3State);
  localStorage.setItem('btn11State', btn11State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn3fire = firebase.database().ref('Livingroom').child('Device').update({
    Air: btn3State,
  });
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn3').classList.remove('btn_color');
  document.getElementById('airfilter').src = 'img/air_off.png';
});
  // Lắng nghe sự thay đổi trên cơ sở dữ liệu Firebase
firebase.database().ref('Livingroom').child('Device').on('value', function(snapshot) {
var airStatus = snapshot.val();

if (airStatus.Air === '1') {
  // Bật btn2 và tắt btn10
  document.getElementById('btn3').classList.add('btn_color');
  document.getElementById('btn11').classList.remove('btn_color');
  document.getElementById('airfilter').src = 'img/air_filter.png';
} else if (airStatus.Air === '0') {
  // Bật btn10 và tắt btn2
  document.getElementById('btn11').classList.add('btn_color');
  document.getElementById('btn3').classList.remove('btn_color');
  document.getElementById('airfilter').src = 'img/air_off.png';
}
});

var sliderValue0 = localStorage.getItem('sliderValue0') || 1;
var slider = document.getElementById("range_liv");
var img3 = document.querySelector('#curtain');
var output = document.getElementById("value1");

slider.value = sliderValue0;
output.innerHTML = sliderValue0;
updateCurtainImage(sliderValue0);

// Cập nhật giá trị slider lên Firebase
slider.oninput = function(){ 
  var value = this.value;
  output.innerHTML = value;
  updateCurtainImage(value);
  localStorage.setItem('sliderValue0', value);

  // Cập nhật giá trị lên Firebase
  firebase.database().ref('Livingroom/Device').update({
    Curtain: value,
  });
};

function updateCurtainImage(value){
  if (value == 0) {
  img3.src = "img/window.png";  
  } 
  else if (value >= 70) 
  {
  img3.src = "img/curtain.png";
  }
  else
  {
  img3.src = "img/curtain_half.png";
  } 
}
// Theo dõi sự thay đổi trên Firebase để điều khiển slider
firebase.database().ref('Livingroom').child('Device/Curtain').on('value', function(snapshot) {
  var data_val = snapshot.val(); // lấy giá trị mới nhất của curtain để gán vào data_val
  slider.value = data_val;
  output.innerHTML = data_val;
  updateCurtainImage(data_val);
});
});

document.addEventListener('DOMContentLoaded', function() {
// phòng bếp
var btn4State = localStorage.getItem('btn4State');
var btn5State = localStorage.getItem('btn5State');
var btn12State = localStorage.getItem('btn12State');
var btn13State = localStorage.getItem('btn13State');

if (btn4State === null) {
  btn4State = 'false';
  localStorage.setItem('btn4State', btn4State);
}

if (btn12State === null) {
  btn12State = 'false';
  localStorage.setItem('btn12State', btn12State);
}

document.getElementById('btn4').addEventListener('click', function() {
  btn4State = '1';
  btn12State = '0';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn4State', btn4State);
  localStorage.setItem('btn12State', btn12State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn4fire = firebase.database().ref().child('Kitchen').child("Vent").set({
    status: btn4State,
  });
  
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn12').classList.remove('btn_color');
  document.getElementById('hood').src = 'img/kitchen_hood.png';
});

document.getElementById('btn12').addEventListener('click', function() {
 
  btn4State = '0';
  btn12State = '1';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn4State', btn4State);
  localStorage.setItem('btn12State', btn12State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn4fire = firebase.database().ref().child('Kitchen').child("Vent").set({
    status: btn4State,
  });
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn4').classList.remove('btn_color');
  document.getElementById('hood').src = 'img/kitchen_off.png';
});
  // Lắng nghe sự thay đổi trên cơ sở dữ liệu Firebase
firebase.database().ref('Kitchen/Vent').on('value', function(snapshot) {
var ventStatus = snapshot.val();

if (ventStatus.status === '1') {

  document.getElementById('btn4').classList.add('btn_color');
  document.getElementById('btn12').classList.remove('btn_color');
  document.getElementById('hood').src = 'img/kitchen_hood.png';
} else if (ventStatus.status === '0') {
 
  document.getElementById('btn12').classList.add('btn_color');
  document.getElementById('btn4').classList.remove('btn_color');
  document.getElementById('hood').src = 'img/kitchen_off.png';
}

});
if (btn5State === null) {
  btn5State = 'false';
  localStorage.setItem('btn5State', btn5State);
}

if (btn13State === null) {
  btn13State = 'false';
  localStorage.setItem('btn13State', btn13State);
}
document.getElementById('btn5').addEventListener('click', function() {
  
  btn5State = '1';
  btn13State = '0';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn5State', btn5State);
  localStorage.setItem('btn13State', btn13State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn5fire = firebase.database().ref().child('Kitchen').child("Humidifier").set({
    status: btn5State,
  });
  

  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn13').classList.remove('btn_color');
  document.getElementById('humidifier').src = 'img/humidifier.png';
});
document.getElementById('btn13').addEventListener('click', function() {
  // Bật btn9 và tắt btn1
  btn5State = '0';
  btn13State = '1';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn5State', btn5State);
  localStorage.setItem('btn13State', btn13State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn5fire = firebase.database().ref().child('Kitchen').child("Humidifier").set({
    status: btn5State,
  });
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn5').classList.remove('btn_color');
  document.getElementById('humidifier').src = 'img/humidifier_off.png';
});
    // Lắng nghe sự thay đổi trên cơ sở dữ liệu Firebase
firebase.database().ref('Kitchen/Humidifier').on('value', function(snapshot) {
var humidifierStatus = snapshot.val();

if (humidifierStatus.status === '1') {
  // Bật btn1 và tắt btn9
  document.getElementById('btn5').classList.add('btn_color');
  document.getElementById('btn13').classList.remove('btn_color');
  document.getElementById('humidifier').src = 'img/humidifier.png';
} else if (humidifierStatus.status === '0') {
  // Bật btn9 và tắt btn1
  document.getElementById('btn13').classList.add('btn_color');
  document.getElementById('btn5').classList.remove('btn_color');
  document.getElementById('humidifier').src = 'img/humidifier_off.png';
}

});
});

document.addEventListener('DOMContentLoaded', function() {
//phòng ngủ
var btn6State = localStorage.getItem('btn6State');
var btn7State = localStorage.getItem('btn7State');
var btn14State = localStorage.getItem('btn14State');
var btn15State = localStorage.getItem('btn15State');


if (btn6State === null) {
  btn6State = 'false';
  localStorage.setItem('btn6State', btn6State);
}

if (btn14State === null) {
  btn14State = 'false';
  localStorage.setItem('btn14State', btn14State);
}
if (btn7State === null) {
  btn7State = 'false';
  localStorage.setItem('btn7State', btn7State);
}

if (btn15State === null) {
  btn15State = 'false';
  localStorage.setItem('btn15State', btn15State);
}
document.getElementById('btn6').addEventListener('click', function() {
 
  btn6State = '1';
  btn14State = '0';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn6State', btn6State);
  localStorage.setItem('btn14State', btn14State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn6fire = firebase.database().ref().child('Bedroom').child("Fan").set({
    status: btn6State,
  });
  

  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn14').classList.remove('btn_color');
  document.getElementById('fan_bed').src = 'img/fan_running.png';
});

document.getElementById('btn14').addEventListener('click', function() {
  
  btn6State = '0';
  btn14State = '1';

  // Lưu trạng thái vào localStorage
  localStorage.setItem('btn6State', btn6State);
  localStorage.setItem('btn14State', btn14State);

  // Cập nhật cơ sở dữ liệu Firebase
  var btn14fire = firebase.database().ref().child('Bedroom').child("Fan").set({
    status: btn6State,
  });
  // Cập nhật giao diện người dùng
  this.classList.add('btn_color');
  document.getElementById('btn6').classList.remove('btn_color');
  document.getElementById('fan_bed').src = 'img/fan.png';
});
firebase.database().ref('Bedroom/Fan').on('value', function(snapshot) {
  var fan1Status = snapshot.val();

  if (fan1Status.status === '1') {
    
    document.getElementById('btn6').classList.add('btn_color');
    document.getElementById('btn14').classList.remove('btn_color');
    document.getElementById('fan_bed').src = 'img/fan_running.png';
  } else if (fan1Status.status === '0') {
    // Bật btn9 và tắt btn1
    document.getElementById('btn14').classList.add('btn_color');
    document.getElementById('btn6').classList.remove('btn_color');
    document.getElementById('fan_bed').src = 'img/fan.png';
  }
  });
  document.getElementById('btn7').addEventListener('click', function() {
    
    btn7State = '1';
    btn15State = '0';
  
    // Lưu trạng thái vào localStorage
    localStorage.setItem('btn7State', btn7State);
    localStorage.setItem('btn15State', btn15State);
  
    // Cập nhật cơ sở dữ liệu Firebase
    var btn7fire = firebase.database().ref().child('Bedroom').child("Air").set({
      status: btn7State,
    });
    
  
    // Cập nhật giao diện người dùng
    this.classList.add('btn_color');
    document.getElementById('btn15').classList.remove('btn_color');
    document.getElementById('airfilter_bed').src = 'img/air_filter.png';
  });

  document.getElementById('btn15').addEventListener('click', function() {
    
    btn7State = '0';
    btn15State = '1';
  
    // Lưu trạng thái vào localStorage
    localStorage.setItem('btn7State', btn7State);
    localStorage.setItem('btn15State', btn15State);
  
    // Cập nhật cơ sở dữ liệu Firebase
    var btn15fire = firebase.database().ref().child('Bedroom').child("Air").set({
      status: btn7State,
    });
    // Cập nhật giao diện người dùng
    this.classList.add('btn_color');
    document.getElementById('btn7').classList.remove('btn_color');
    document.getElementById('airfilter_bed').src = 'img/air_off.png';
  });
  firebase.database().ref('Bedroom/Air').on('value', function(snapshot) {
    var air1Status = snapshot.val();
  
    if (air1Status.status === '1') {
      // Bật btn1 và tắt btn9
      document.getElementById('btn7').classList.add('btn_color');
      document.getElementById('btn15').classList.remove('btn_color');
      document.getElementById('airfilter_bed').src = 'img/air_filter.png';
    } else if (air1Status.status === '0') {
      // Bật btn9 và tắt btn1
      document.getElementById('btn15').classList.add('btn_color');
      document.getElementById('btn7').classList.remove('btn_color');
      document.getElementById('airfilter_bed').src = 'img/air_off.png';
    }
    });
var sliderValue1 = localStorage.getItem('sliderValue1') || 1;
var slider1 = document.getElementById("range_bed");
var img4 = document.getElementById('curtain_bed');
var output1 = document.getElementById("value2");

slider1.value = sliderValue1;
output1.innerHTML = sliderValue1;
updateCurtainImage(sliderValue1);

slider1.oninput = function(){ 
  var value1 = this.value;
  output1.innerHTML = value1;
  updateCurtainImage(value1);
  localStorage.setItem('sliderValue1', value1);
  firebase.database().ref('Bedroom').update({
    Curtain1: value1,
  });

};
function updateCurtainImage(value1){
  if (value1 == 1) {
    img4.src = "img/window.png";  
  } else if (value1 >= 70) {
    img4.src = "img/curtain.png";
  } else {
    img4.src = "img/curtain_half.png";
  } 
}
firebase.database().ref('Bedroom').child('Curtain1').on('value', function(snapshot) {
  var data_val = snapshot.val();
  slider1.value = data_val;
  output1.innerHTML = data_val;
  updateCurtainImage(data_val);
});

var sliderValue2 = localStorage.getItem('sliderValue2') || 1;
var slider2 = document.getElementById("range_bulb");
var img5 = document.getElementById('bulb_bed');
var output2 = document.getElementById("value_bulb");

slider2.value = sliderValue2;
output2.innerHTML = sliderValue2;
updateBulbImage(sliderValue2);

slider2.oninput = function(){ 
  var value2 = this.value;
  output2.innerHTML = value2;
  updateBulbImage(value2);
  localStorage.setItem('sliderValue2', value2);
  firebase.database().ref('Bedroom').update({
    Light1: value2,
  });

};
function updateBulbImage(value2){
  if (value2 == 1) {
    img5.src = "img/light_bulb.png";
  } else if (value2 >= 60) {
    img5.src = "img/light_on.png";
  } else {
    img5.src = "img/light_half.png";
  }
}
firebase.database().ref('Bedroom').child('Light1').on('value', function(snapshot) {
  var data_val1 = snapshot.val();
  slider2.value = data_val1;
  output2.innerHTML = data_val1;
  updateBulbImage(data_val1);
});

});

