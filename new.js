let counter=0;
document.querySelector('form').onsubmit=function(){
  if(counter==0){
      let name=document.querySelectory('#name').value;
      alert(`Hello ${name}!`);
      todo();
      counter++;
  }
 else{
  document.querySelector('#list1').innerHTML=document.querySelector('#name').value;
 }
};
function todo(){
   doucment.querySelector('h3').innerHTML='Enlist Your Priorities!!';
}