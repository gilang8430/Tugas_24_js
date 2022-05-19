function arrRevesing(){
  var sebelumnya = "32,33,16,40,9,7,11,2,44,1,66";
  console.log("sebelumnya :", sebelumnya);

  const array1 = [32,33,16,40,9,7,11,2,44,1,66];

  array1.sort();

  console.log("Ascending :", array1);

  var array2 = [ 1, 11, 16,  2, 32,
  33, 40, 44, 66,  7,
   9];
  array2.reverse();
  console.log("Descending :", array2);
}

arrRevesing()
