// Elements
function bold()
{
    document.getElementById("content").style.fontWeight = 'bold'
}  
function italic()
{
    document.getElementById("content").style.fontStyle = 'italic'
}
function underline()
{
    document.getElementById("content").style.textDecoration = 'underline'
}
function uppercase()
{
    document.getElementById("content").style.textTransform = 'uppercase'
}
function lowercase()
{
    document.getElementById("content").style.textTransform = 'lowercase'
}
function capitalize()
{
    document.getElementById("content").style.textTransform = 'Capitalize'
}

function center()
{
    document.getElementById("content").style.textAlign = 'center'
}
function right()
{
    document.getElementById("content").style.textAlign = 'right'
}
function left()
{
    document.getElementById("content").style.textAlign = 'left'
}

function clr()
{
    document.getElementById("content").style.fontWeight = 'normal'
    document.getElementById("content").style.textDecoration = 'none'
    document.getElementById("content").style.fontStyle = 'normal'
    document.getElementsByClassName('content')[0].innerHTML=''
}


// const contenteditable = document.getElementById('content');

// // ✅ Clear contenteditable value
// contenteditable.value = '';

// // ✅ Clear textarea value on click
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function clr() {
//   // 👇️ log value before clearing it
//   console.log(contenteditable.value);

//   // 👇️ clear contenteditable value
//   contenteditable.value = '';
// });