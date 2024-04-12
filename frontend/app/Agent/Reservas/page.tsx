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
     <hr className=' mb-8' id="gestionar-reserva"/>
        <List option={'Reservas'} listRes={listaRes} listPass={listaPass} listVue={listaVue} listUse={listaUse}/>
        <InsertForm option0='Admin' option={'Reserva'} info0={'ID'} info1={'Fecha de caducidad'} info2={'Chequeada'} info3={'ID_pasajero'} info4={'ID_empleado'} type0={'number'}  type1={'date'} type2={'checkbox'} type3={'Integer'} />      
    </section>
  );
}
