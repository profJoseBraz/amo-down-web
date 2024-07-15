import "./Form.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("tftv2024@tftv.io");
    const [emailContado, setEmailContato] = useState("");
    const [numero, setNumero] = useState("");
    const [message, setMessage] = useState("");
    const [fullMessage, setFullMessage] = useState("");

    useEffect(() => {
        setEmail(email);
    });

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        
        const formData = {
            name,
            email,
            fullMessage
        };

        try {
            const response = await axios.post("https://amodown.tftv.io/envio-email.php", formData);
            console.log(response.data);
            // Adicione qualquer lógica adicional após o envio do formulário com sucesso
        } catch (error) {
            console.error("Erro ao enviar o formulário", error);
            // Adicione lógica para lidar com o erro
        };
    };

    useEffect(() => {
        setFullMessage(`${message}
            ${emailContado}
            ${numero}`);
    }, [message, emailContado, numero]);

    return (
        <>
            <div className="form">
                <h1>Envie uma Mensagem</h1>
                <div className="line"></div>
                <h3>Um email será enviado para o proprietário</h3>
                <form>
                    <div className="all-inputs">
                        <textarea placeholder="Escreva sua mensagem" onChange={(e) => {setMessage(e.target.value)}}></textarea>
                        <div className="inputs">
                            <input type="text" placeholder="Seu nome" onChange={(e) => {setName(e.target.value)}}/>
                            <input type="text" placeholder="Seu email" onChange={(e) => {setEmailContato(e.target.value)}}/>
                            <input type="text" placeholder="Seu número de telefone" onChange={(e) => {setNumero(e.target.value)}}/>
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Envie a Mensagem</button>
                </form>
            </div>
        </>
    );
};

export default Form;