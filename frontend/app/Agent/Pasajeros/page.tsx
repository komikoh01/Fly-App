import { ListData } from "@/logic/ListData";
import { List } from '../../../components/Lists'
import { InsertForm } from '../../../components/client/InsertForm'

export default async function UsersPage() {
  const listaUse = await ListData("Usuario");
  const listaPass = await ListData('Pasajero')
  const listaRes = await ListData('Reserva')
  const listaVue = await ListData('Vuelo')


  return (
    <section className=" mt-20">
       <hr className=' mb-8' id="gestionar-pasajero"/>
        <List option={'Pasajeros'}  listPass={listaPass} listRes={listaRes} listVue={listaVue} listUse={listaUse}/>
        <InsertForm option0='Admin' option={'Pasajero'} info0={'ID'} info1={'Nombre'} info2={'Apellido'} info3={'Telefono'} info4='' type0={'number'} type1={'text'} type2={'text'} type3={'number'} />      
    </section>
  );
}
