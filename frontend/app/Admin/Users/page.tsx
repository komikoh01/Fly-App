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
      <hr className=" mb-8" id="gestionar-usuario" />
      <List
        option={"Usuarios"}
        listUse={listaUse}
        listPass={listaPass}
        listRes={listaRes}
        listVue={listaVue}
      />
      <InsertForm option0='Admin' option={'Usuario'} info0={'ci'} info1={'nombre de usuario'} info2='contraseña' info3='rol' info4='' type0={'number'} type1={'text'} type2={'password'} type3={'text'} /> 
    </section>
  );
}
