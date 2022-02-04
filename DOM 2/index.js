const text = document.querySelector('p');

//task-1
//----------------------------------

//task-2
const para = document.createElement('a');
para.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
para.innerText = "This is a link."

document.body.appendChild(para);
//----------------------------------

//task-3
text.innerHTML = text.innerHTML
.split('.')
.join('</p><p>');
//----------------------------------

//task-4

//----------------------------------

//task-5
//let str = document.getElementById("ourtext").innerHTML;
//let res = str.replace(/!/gi, "😲");
//document.getElementById("ourtext").innerHTML = res;

Array.from(document.querySelectorAll('p'))
.forEach(p=>{
  p.innerHTML=p.innerHTML

  .replace(/\?/g,'🤔')
  .replace(/\!/g,'😲')
})
//----------------------------------
