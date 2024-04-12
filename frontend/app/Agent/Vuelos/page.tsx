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
      <hr className=' mb-8' id="gestionar-vuelo"/>
        <List option={'Vuelos'} listVue={listaVue} listRes={listaRes} listPass={listaPass} listUse={listaUse}/>
        <InsertForm option0='Admin' option={'Vuelo'} info0={'ID'} info1={'Origen'} info2={'Destino'} info3={'Fecha'} info4='' type0={'number'} type1={'text'} type2={'text'} type3={'date'} />
    </section>
  );
}
