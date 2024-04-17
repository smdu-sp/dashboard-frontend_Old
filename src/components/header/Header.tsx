import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-900 shadow background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:flex lg:items-center">
        <Image
          src="/images/logosmul.png"
          alt="Descrição da imagem"
          width={125}
          height={75}
        />
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Painel de Chamados ATIC
        </h1>
      </div>
    </header>
  );
}
