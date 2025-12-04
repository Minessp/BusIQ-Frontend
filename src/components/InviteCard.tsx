interface CardProps {
    title: string;
    text: string;

}

function Card({ title, text } : CardProps) {
    return (
        <div className="min-w-1/3 h-72 bg-bg-dark rounded-3xl p-8 transition-all duration-300 shadow-md
  			hover:translate-y-[-3px] hover:brightness-105 hover:shadow-lg">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

function LoginCard() {
    return (
        <Card
            title="Login"
            text="Teste"    
        />
    )
}

function SignupCard() {
    return (
        <Card 
            title="Signup"
            text="Teste"
        />
    )
}

export { LoginCard, SignupCard }