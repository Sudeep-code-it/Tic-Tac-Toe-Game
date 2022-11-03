let divarray=Array.from(document.querySelectorAll(".box")); //nodelist hence use (Array.from)
let timefor=document.querySelector("#turnsymb"); //whose turn
let btn=document.querySelector('#reset');  //reset btn
let wininfo=document.querySelector("#winner"); //span showing winner
let allspans=Array.from(document.getElementsByClassName("textbox")); //html collection hence use (Array.from)
let isgameover=false;
let linediv=document.querySelector('#line'); //line div
let turn='X';
let index=0;
let gamediv=document.querySelector('#game');

timefor.innerText=turn;

wininfo.parentElement.classList.add('notvis');


function changeTurn(){
    return turn==='X'?turn='O':turn='X';   //function to change 'X' & 'O's
}

function checkWin(){
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

win.forEach((e,i)=>{
if(allspans[e[0]].innerText===allspans[e[1]].innerText && allspans[e[1]].innerText===allspans[e[2]].innerText && allspans[e[0]].innerText!=='')
  { index=i;
    linediv.classList.add(`line-${i}`);
    gamediv.classList.add('visibility');
    wininfo.innerText=`${allspans[e[0]].innerText}`;
  isgameover=true;
  wininfo.parentElement.classList.remove('notvis');
timefor.parentElement.classList.add('notvis');

}
})
}

divarray.forEach((ele)=>{
    ele.addEventListener('click',()=>{
    if(ele.querySelector('span').innerText==='')
    {ele.querySelector('span').innerText=turn;
    changeTurn();
    timefor.innerText=turn;
    checkWin();
    }
    })
})

btn.addEventListener('click',()=>{
    allspans.forEach((e)=>{
    e.innerText='';
    })
        turn='X';
        timefor.innerText=turn;
        wininfo.innerText='...';
        isgameover=false;
        linediv.classList.remove(`line-${index}`);
    gamediv.classList.remove('visibility');
wininfo.parentElement.classList.add('notvis');
timefor.parentElement.classList.remove('notvis');



    
})