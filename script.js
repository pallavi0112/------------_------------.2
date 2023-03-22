let skills = document.getElementsByClassName('skills');
let outer = document.getElementsByClassName('outer');
let skillpercentage = document.getElementsByClassName('skill-percentage');
for( let skill in skills){
    console.log(skills[skill])
    let startval = 0 ;
    let endval = skills[skill].getAttribute('data-value');
    let progress = setInterval(()=>{
        startval++;
        outer[skill].style.background = `conic-gradient(#c70c57 ${startval * 3.6}deg , #ededed 0deg)`
        skillpercentage[skill].textContent = `${startval}%` 
        if(startval == endval){
            clearInterval(progress)
        }
    },100)
    
}