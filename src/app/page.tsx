import Card from "@/components/card/Card";
import Header from "@/components/header/Header";
import * as conexao from "../../utils/prisma.service";
import BarChart from "@/components/barchart/barchart";
import AreaChart from "@/components/areachart/areachart";


const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default async function Home() {
  const anoatual = new Date().getFullYear();
  const mes = await conexao.chamadosMes();
  const ano = await conexao.chamadosAno();
  const mesAmes = await conexao.chamadosPorMes();
  const quantidadeAtribuidos = await conexao.chamadosAtribuidos();
  const chamadosNovos = await conexao.chamadosNovos();
  mes.sort((a, b) => b.tickets - a.tickets);
  ano.sort((a, b) => b.tickets - a.tickets);
  return (
    <div>
      <Header />
      <div className="lg:flex">
        <Card
          titulo="Chamados Novos"
          color="primary"
          valor={chamadosNovos.quantidade}
        ></Card>
        <Card
          titulo="Chamados Atribuídos"
          color="success"
          valor={quantidadeAtribuidos.quantidade}
        ></Card>
        <Card
          titulo="Média de Avaliação do Mês"
          color="neutral"
          valor="7.5"
        ></Card>
        <Card
          titulo="Média de Avaliação"
          ano={anoatual}
          color="danger"
          valor="8.5"
        ></Card>
        <Card
          titulo="Média de Avaliação Geral"
          color="warning"
          valor="9.5"
        ></Card>
      </div>
      <div style={{ justifyContent: 'center' }}>
        <div style={{ width: '55%', height: '1000px' }}>
          <BarChart data={mes} label={meses[new Date().getMonth()]} />
        </div>
        <div style={{ width: '50%', height: '1000px' }}>
          <BarChart data={ano} label={new Date().getFullYear().toString()} />
        </div>
      </div>
      <div style={{ width: '50%', height: '1000px' }}>
        <AreaChart data={mesAmes} bar={true} label={"Últimos 12 meses"} />
      </div>
    </div>
  );
}
