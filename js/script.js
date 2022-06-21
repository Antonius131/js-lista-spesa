const buyList = [
   'latte',
   'uova',
   'pesce',
   'carne',
   'biscotti',
   'insalata',
   'avocado'
]

const listWrapper = document.getElementById('buying-list');


let i = 0;

while ( i < buyList.length) {

   const listTag = document.createElement('li');
   listTag.innerHTML = buyList[i];

   listWrapper.append(listTag);

   i++;

}