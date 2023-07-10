function built_in_methods() {
  /////////////////////METHOD PUSH////////////////////////////////////////////////////////////////////
  //Metode ini digunakan untuk menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.

  let mobil = ['daihatsu', 'suzuki', 'kijang'];
  console.log(mobil);
  mobil.push('galardo', ' ferari');
  console.log(mobil);

  ////////////////////////////////////////Method POP//////////////////////////////////////////////////////////
  //Metode ini menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.
  let hobi = ['sepeda', 'bola', 'hakking'];
  let hobis = hobi.pop();
  console.log(hobis);
  console.log(hobi);

  /////////////////////////////////////////Method include ///////////////////////////////////////////////
  //Metode ini digunakan untuk memeriksa apakah suatu elemen ada di dalam array dan mengembalikan nilai true jika ada, dan false jika tidak ada.

  let fruit = ['apple', 'banana', 'orange'];
  console.log(fruit.includes('banana')); // Output: true
  console.log(fruit.includes('melon')); // Output: false

  ////////////////////////////////////////Method indexof///////////////////////////////

  let hp = ['samsung', 'xiomi', 'redmi'];
  console.log(hp.indexOf('samsung'));
  console.log(hp.indexOf('samsul'));

  ////////////////////////////////////// Method slice//////////////////////////////////
  // Metode ini menggabungkan dua atau lebih array dan mengembalikan array baru yang berisi elemen-elemen dari array yang digabungkan.

  let fruits = ['apple', 'banana', 'orange', 'grape'];
  let slicedFruits = fruits.slice(0, 5);
  console.log(slicedFruits);

  ////////////////////////////////////////////Method uppercase/////////////////////////////////////////////////////

  let message = 'Hello, World!';
  let upperCaseMessage = message.toUpperCase();
  console.log(upperCaseMessage);

  //////////////////////////////////////////// Method Lowercase////////////////////////////////////////////////

  let message1 = 'Hello, World!';
  let lowerCaseMessage = message1.toLowerCase();
  console.log(lowerCaseMessage);

  //////////////////////////////////////////////// method rondom ////////////////////////////////////

  let randomNum = Math.random();
  console.log(randomNum);
  ///////////////////////////////////////////method round///////////////////////////////////////////

  let num = 3.4;
  let roundedNum = Math.round(num);
  console.log(roundedNum);

  ///////////////////////////////////////////////Method concat/////////////////////////////////////////

  let buah = ['apple', 'banana'];
  let morebuah = ['orange', 'grape'];
  let allbuah = buah.concat(morebuah);
  console.log(allbuah);
}

built_in_methods();
