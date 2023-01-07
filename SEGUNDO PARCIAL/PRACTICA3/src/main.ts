import './style.css'
import axios from 'axios'
import { IResTutoria, Tutoria } from './interfaces/ITutoria';
const httpAxios =  axios.create({
  baseURL:'http://localhost:8000',
})

const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent=" ID: "
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="asignatura"> Asignatura: </label><input id="asignatura"/>
<label for ="idtutorado"> Idtutorado: </label><input id="idtutorado"/>
<label for ="idtutor"> Idtutor: </label><input id="idtutor"/>
<label for ="ndehoras"> NdeHoras: </label><input id="ndehoras"/>
<label for ="fecha"> Fecha: </label><input id="fecha"/>
<br><label for ="hora"> Hora: </label><input id="hora"/>
<br>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!
const id = document.querySelector<HTMLInputElement>('#id')!
const asignatura = document.querySelector<HTMLInputElement>('#asignatura')!
const status = document.querySelector<HTMLInputElement>('#status')!
const idtutorado = document.querySelector<HTMLInputElement>('#idtutorado')!
const idtutor = document.querySelector<HTMLInputElement>('#idtutor')!
const ndehoras = document.querySelector<HTMLInputElement>('#ndehoras')!
const fecha = document.querySelector<HTMLInputElement>('#fecha')!
const hora = document.querySelector<HTMLInputElement>('#hora')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion

newb.addEventListener('click',()=>{
  idtutorado.value=""
  idtutor.value=""
  asignatura.value=""
  ndehoras.value=""
  fecha.value=""
  hora.value=""
  id.value=""
})

query.addEventListener('click', async ()=>{
    const respTutorias:IResTutoria
  =  await (await httpAxios.get<IResTutoria>('tutoria')).data;
    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"

    const { tutorias } = respTutorias;
    console.log(respTutorias)

    for (const tutoria of tutorias)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${tutoria._id}" >${tutoria.asignatura}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${tutoria.idtutorado}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const tutoria:Tutoria
          =  await (await httpAxios.get<Tutoria>(`tutorias/${idx}`)).data;
          idtutorado.value=tutoria.idtutorado.toString();
          idtutor.value= tutoria.idtutor.toString();
          asignatura.value= tutoria.asignatura.toString();
          ndehoras.value= tutoria.ndehoras.toString();
          fecha.value= tutoria.fecha.toString();
          hora.value = tutoria.hora.toString();          
          id.value= tutoria._id!;      
      })
    })
})

save.addEventListener('click',async ()=>{
  const data:Tutoria = {
    idtutorado: String(idtutorado.value),
    idtutor: String( idtutor.value),
    asignatura: String( asignatura.value),
    ndehoras: Number( ndehoras.value),
    fecha:String (fecha.value),
    hora: String( hora.value),
  }
  if (id.value.trim().length>0 )
  {
    const resp: Tutoria = await (await httpAxios.put<Tutoria>(`tutoria/${id.value}`, data)).data
    console.log(resp)
    console.log(`La tutoria con respecto a la ${resp.asignatura} fue modificada con éxito`);
    return;
  }
  try {
    const resp: Tutoria =  await (await httpAxios.post<Tutoria>(`tutoria`, data)).data
    console.log(`La tutoria con respecto a la ${resp.asignatura} fue grabada con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
    }  
  } 
})