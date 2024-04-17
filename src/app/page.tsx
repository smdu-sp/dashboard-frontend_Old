import Card from "@/components/card/Card";
import Tecchart from "@/components/tecchart/Tecchart";
import Header from "@/components/header/Header";
import * as conexao from "../../utils/prisma.service";

export default async function Home() {
  const data = await conexao.chamadosMes();
  console.log(data);
  return (
    <div>
      <Header />      
      <div className="lg:flex">
        <Card titulo="Chamados Novos" color="primary"></Card>
        <Card titulo="Chamados Atribuídos" color="success"></Card>
        <Card titulo="Média de Avaliação do Mês" color="neutral"></Card>
        <Card titulo="Média de Avaliação Geral" color="danger"></Card>
      </div>
      <Tecchart data={data} />
    </div>
  );
}
