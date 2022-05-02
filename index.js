// Write your code here!
const elementMain=document.getElementById("main");
elementMain.remove();
const newHeader=document.createElement('h1');
newHeader.node='h1#victory';
newHeader.id='victory';
newHeader.textContent="Jay is the champion";
document.body.append(newHeader);

