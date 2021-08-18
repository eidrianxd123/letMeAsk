import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import logoGoogleImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'

export function Home() {
    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="illustration" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas das suas audiencia em tempo real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="logo"/>
                    <button className='create-room'>
                        <img src={logoGoogleImg} alt="logo Google"/>
                        Crie sua sala com Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text"
                        placeholder="Digite o nome da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}