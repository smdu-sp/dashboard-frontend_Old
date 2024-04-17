"use client";

import Card from "@/components/card/Card";
import BarChart from "@/components/barchart/barchart";
import Tecchart from "@/components/tecchart/Tecchart";
import BoxCard from "@/components/Box/Boxcard";
import Header from "@/components/header/Header";
import Grid from "@mui/joy/Grid";

export default function Home() {
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
