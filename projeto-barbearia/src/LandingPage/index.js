import React, {useState} from "react";
import './style.css'


export default function LandingPage(){


    const [modoEscuro, setmodoEscuro] = useState(false)

    const alterarModo = () => {
        setmodoEscuro(!modoEscuro)
    }

    return(
        <div className={modoEscuro ? 'modo-escuro' : 'modo-claro' }>
            <header className="limitar-secao topo">
                <img src="assets/barbearia-logo.png" alt="logo" className="logo"></img>
                <button className={modoEscuro ? 'modo-escuro' : 'modo-claro' } onClick={alterarModo}>
                    <img src={modoEscuro ?"assets/sun.png":"assets/moon.png"} alt="Icone do modo"></img>{modoEscuro ? "Light":"Dark"}
                </button>
            </header>
            <main>
                <section className="secao-banner"></section>
                <section className="secao-sobre">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className="primeiro-paragrafo">Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p className="segundo-paragrafo">Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de 
                       mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará 
                       desapontado.
                    </p>
                    <p className="assinatura">S. Kelly</p>
                </section>
            </main>

        </div>
    )
}
