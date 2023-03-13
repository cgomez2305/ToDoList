const evento=document.getElementById('work')
const work=document.getElementById('text')
const plus=document.getElementById('plus')
const works=document.getElementById('works')
const pendientes=document.getElementById('pendientes')

let contador=0;
let positivo=0;

plus.addEventListener('click',(e)=>{
    if(work.value==''){
        alert('La tarea esta vacia')
    }else{
        const cajaWork=document.createElement('div')
        cajaWork.setAttribute('class','container-add-work')
        const tarea =document.createElement('h4')
        const icon=document.createElement('img')
        icon.src='./IMAGENES/8664938_trash_can_delete_remove_icon.png'
        icon.setAttribute("id",`trash`)
        icon.setAttribute('class','trash')
        tarea.textContent=work.value
        cajaWork.appendChild(tarea)
        cajaWork.appendChild(icon)
        works.appendChild(cajaWork)
        work.value=''
        contador++;
        actualizar()
    }
})

works.addEventListener('click',(e)=>{
    if(e.target.className=='trash'){
        const abuelo=e.target.parentElement
        works.removeChild(abuelo)
        contador--;
        positivo++;
        actualizar()
    }
})
function actualizar(){
    pendientes=pendientes.innerHTML=`
    <h3>Tareas pendientes ${contador} / Tareas realizadas ${positivo} </h3>
    `
}