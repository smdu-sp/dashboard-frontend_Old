import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-900 shadow background">   
        <div className="flex items-center">
          <Image
            src="/images/logosmul.png"
            alt="Descrição da imagem"
            width={130}
            height={80}
          />
          <h1 className="text-3xl font-bold tracking-tight text-white lg:ml-4">
            Painel de Chamados SMUL/ATIC
          </h1>
        </div>     
    </header>
  );
}
