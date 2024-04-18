import Card from "@/components/card/Card";
import Tecchart from "@/components/tecchart/Tecchart";
import Header from "@/components/header/Header";
import * as conexao from "../../utils/prisma.service";
import BarChart from "@/components/barchart/barchart";
import AreaChart from "@/components/areachart/areachart";

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default async function Home() {
  const mes = await conexao.chamadosMes();
  const ano = await conexao.chamadosAno();
  const mesAmes = await conexao.chamadosPorMes();
  mes.sort((a, b) => b.tickets - a.tickets);
  ano.sort((a, b) => b.tickets - a.tickets);
  return (
    <div>
      <Header />      
      <div className="lg:flex">
        <Card titulo="Chamados Novos" color="primary"></Card>
        <Card titulo="Chamados Atribuídos" color="success"></Card>
        <Card titulo="Média de Avaliação do Mês" color="neutral"></Card>
        <Card titulo="Média de Avaliação Geral" color="danger"></Card>
      </div>
      <BarChart data={mes} label={meses[new Date().getMonth()]} />
      <BarChart data={ano} label={new Date().getFullYear().toString()} />
      <AreaChart data={mesAmes} bar={true} label={'Últimos 12 meses'} />
    </div>
  );
}
