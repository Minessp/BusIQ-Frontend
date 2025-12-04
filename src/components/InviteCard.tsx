interface CardProps {
    title: string;
    text: string;
    buttonText: string;
}

function Card({ title, text, buttonText } : CardProps) {
    return (
        <div className="flex flex-col justify-center items-center h-72 bg-bg rounded-3xl p-8 transition-all duration-300 shadow-md
  			hover:translate-y-[-3px] hover:brightness-105 hover:shadow-lg">
            <h2>{title}</h2>
            <p>{text}</p>
            <button className="flex items-center justify-center w-1/3 h-8 bg-bg-light rounded-3xl mt-6 font-semibold shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">{buttonText}</button>
        </div>
    );
}

function LoginCard() {
    return (
        <div className="min-w-1/3">
            <Card
            title="Já possui conta?"
            text="Faça login clicando no botão abaixo"    
            buttonText="Login"
            />
        </div>
    )
}

function SignupCard() {
    return (
        <div className="min-w-1/3">
            <Card
            title="Não tem cadastro?"
            text="Cadastre-se agora clicando no botão abaixo"    
            buttonText="Signup"
            />
        </div>
    )
}

export { LoginCard, SignupCard }