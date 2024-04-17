'use client';

import Card from "@/components/card/Card";
import Tecchart from "@/components/tecchart/Tecchart";
import Header from "@/components/header/Header";

export default async function Home() {
  return (
    <div>
      <Header />      
      <div className="lg:flex">
        <Card titulo="Chamados Novos" color="primary"></Card>
        <Card titulo="Chamados Atribuídos" color="success"></Card>
        <Card titulo="Média de Avaliação do Mês" color="neutral"></Card>
        <Card titulo="Média de Avaliação Geral" color="danger"></Card>
      </div>
      <Tecchart />
    </div>
  );
}
