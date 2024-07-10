import "./Form.css";

function Form() {
    return (
        <>
            <div className="form">
                <h1>Envie uma Mensagem</h1>
                <div className="line"></div>
                <h3>Um email será enviado para o proprietário</h3>
                <form action="">
                    <div className="all-inputs">
                        <textarea placeholder="Escreva sua mensagem"></textarea>
                        <div className="inputs">
                            <input type="text" placeholder="Seu nome"/>
                            <input type="text" placeholder="Seu email"/>
                            <input type="text" placeholder="Seu número de telefone"/>
                        </div>
                    </div>
                    <button type="submit">Envie a Mensagem</button>
                </form>
            </div>
        </>
    );
};

export default Form;