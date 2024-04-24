import Card from "@/components/card";
import BgImage from "./../img/criativos-redes-sociais-arte-para-post-divulgacao.665cba3f.jpg";
import { FaWhatsapp } from "react-icons/fa6";

import Logo1 from "./../img/Logo-Novo-qm7s2yl76s3uo5kpqpxkehgp0kneddsh47e0kmsysg.png";
import Logo2 from "./../img/Objeto Inteligente de Vetor.png";
import Logo3 from "./../img/logo-hair-scholl.png";
import Logo4 from "./../img/logo-png-qkitandtd8o9m7lpgea24pg1ixieffi03qw1p8gpa8.png";
import Logo5 from "./../img/sim-company-logo.png";
import Logo6 from "./../img/thecnoar-automotivo-logo.png";
import Logo7 from "./../img/ticonnected-logo.png";

import Image from "next/image";
import Whatsapp from "./../img/whatsapp.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${BgImage.src})`,
        }}
        className="w-full h-screen px-[10%] bg-no-repeat bg-cover bg-center max-sm:px-[5%] max-sm:h-[80vh] relative"
      >
        <div className="text-white h-full max-w-[450px] flex flex-col justify-center gap-y-4 max-sm:max-w-none">
          <h1 className="text-5xl font-bold max-sm:text-3xl">
            Agência de marketing digital
          </h1>
          <p>
            Potencialize sua presença online com nossa agência de marketing
            completa. Conquiste visibilidade e resultados hoje!
          </p>

          <button className="cursor-pointer w-80 max-sm:w-full bg-green-700 py-2 rounded-md border-solid border-white border shadow-xl shadow-green-800 hover:bg-green-600 hover:shadow-lg transition font-semibold ">
            <Link
              href="https://wa.me/5511982873694"
              className="flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Falar com atendente
            </Link>
          </button>
        </div>
      </div>

      <div className="px-[10%] my-10 max-sm:px-[5%]">
        <h2 className="text-3xl font-semibold">
          Você está pronto para levar sua presença online para o próximo nível?
        </h2>
        <p>
          Imagine uma parceria com uma agência de marketing que não apenas
          entende suas necessidades, mas as supera. Na busca incessante pelo
          sucesso digital, você precisa de mais do que apenas uma empresa de
          marketing - você precisa de um parceiro estratégico que tome conta de
          cada detalhe, desde a criação do seu site até a otimização do SEO e
          além.
        </p>
      </div>

      <div className="bg-[#121212] text-white px-[10%] py-40 max-lg:py-20 max-sm:px-[5%] max-sm:py-10">
        <h2 className="text-3xl font-semibold max-sm:text-2xl">
          {" "}
          Na era digital em constante evolução, a competição é feroz
        </h2>
        <p>
          É hora de se destacar. Nossa agência de marketing é o catalisador que
          você precisa para alcançar seus objetivos. Aqui está o que oferecemos:
        </p>

        <div className="grid grid-cols-2 mt-20 gap-x-8 gap-y-8 max-lg:grid-cols-1 max-lg:mt-10">
          <Card
            title="Criação de site impecável!"
            text="Sua presença online é a primeira impressão que os clientes em potencial têm da sua marca. Nossa equipe especializada não apenas cria sites visualmente deslumbrantes, mas também os otimiza para desempenho máximo e experiência do usuário excepcional."
          />
          <Card
            title="Gestão de Tráfego Pago de Alto Desempenho"
            text=" Deixe-nos direcionar o tráfego certo para o seu site. Com estratégias de marketing de alto impacto, garantimos que sua marca seja vista pelas pessoas certas, no momento certo, aumentando assim suas conversões e seu ROI."
          />
          <Card
            title="Gestão de Redes Sociais Engajadora"
            text="As redes sociais são o epicentro do engajamento do cliente. Nossa equipe experiente não apenas cria conteúdo cativante, mas também constrói relacionamentos genuínos com seu público-alvo, transformando seguidores em defensores entusiasmados da sua marca."
          />
          <Card
            title="Fotografia de Alta Qualidade"
            text=" Imagens falam mais que mil palavras. Nossos fotógrafos profissionais capturam a essência da sua marca de forma impressionante, garantindo que seu conteúdo visual se destaque em um mar de concorrência."
          />
          <Card
            title="Edição de Vídeo Impactante"
            text="O vídeo é uma ferramenta poderosa para contar a história da sua marca. Nossa equipe de editores talentosos transforma ideias em vídeos envolventes e memoráveis, aumentando assim o envolvimento e a conexão com seu público-alvo."
          />
          <Card
            title="Design Criativo e Profissional"
            text=" Do logotipo à identidade visual completa, nosso talentoso time de designers cria peças únicas e impactantes que comunicam a essência da sua marca de maneira eficaz e memorável."
          />
          <Card
            title="Otimização de SEO de Ponta"
            text="Ser encontrado online é crucial. Com nossa abordagem focada em dados e nossa compreensão profunda dos algoritmos de busca, garantimos que sua marca esteja no topo dos resultados de pesquisa, aumentando assim sua visibilidade e autoridade online."
          />
        </div>
      </div>

      <h3 className="text-center mt-20 text-3xl font-semibold max-lg:mx-[10%] max-sm:text-2xl max-sm:mx-[5%]">
        Algumas empresas que confiam no nosso trabalho
      </h3>
      <div className="flex max-w-[80%] m-auto flex-wrap justify-center items-center gap-20 mb-20 mt-14 max-sm:max-w-[90%]">
        <div className="max-w-[200px] w-full max-sm:max-w-[100px]">
          <Image src={Logo1} alt="logo cliente que trabalha conosco" />
        </div>
        <div className="max-w-[200px] w-full max-sm:max-w-[100px]">
          <Image src={Logo2} alt="logo cliente que trabalha conosco" />
        </div>
        <div className="max-w-[200px] w-full max-sm:max-w-[100px]">
          <Image src={Logo3} alt="logo cliente que trabalha conosco" />
        </div>
        <div className="max-w-[100px] w-full max-sm:max-w-[100px]">
          <Image src={Logo5} alt="logo cliente que trabalha conosco" />
        </div>
        <div className="max-w-[200px] w-full max-sm:max-w-[100px]">
          <Image src={Logo6} alt="logo cliente que trabalha conosco" />
        </div>
        <div className="max-w-[200px] w-full max-sm:max-w-[100px]">
          <Image src={Logo7} alt="logo cliente que trabalha conosco" />
        </div>
      </div>

      <div className="fixed bottom-6 right-6 cursor-pointer">
        <Link href="https://wa.me/5511982873694">
          <Image src={Whatsapp} width={60} height={60} alt="Whatsapp" />
        </Link>
      </div>

      <footer className="px-[10%] w-full bg-[#121212] text-white flex justify-between items-center text-xs py-2">
        <div>Politicas de privacidade</div>
        <div>CNPJ: 54.497.080/0001-61</div>
      </footer>
    </main>
  );
}
