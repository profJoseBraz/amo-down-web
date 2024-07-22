import "./Form.css";
import { RefObject, useEffect, useState } from "react";
import axios from "axios";

interface Props {
    goToContact?: RefObject<HTMLDivElement>
}

function Form({goToContact}: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("tftv2024@tftv.io");
    const [emailContado, setEmailContato] = useState("");
    const [numero, setNumero] = useState("");
    const [message, setMessage] = useState("");
    const [fullMessage, setFullMessage] = useState("");
    const [selectValue, setSelectValue] = useState("");

    const handleSelect = (e : any) => {
        setSelectValue(e.target.value);
    };

    useEffect(() => {
        setEmail(email);
    });

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        
        const formData = {
            name,
            email,
            fullMessage,
            emailContado,
            selectValue
        };

        try {
            const response = await axios.post("https://amodown.org/envio-email.php", formData);
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
        
        const id1 = document.getElementById("1") as HTMLTitleElement;
        const id2 = document.getElementById("2") as HTMLTitleElement;
        const id3 = document.getElementById("3") as HTMLTitleElement;
        const id4 = document.getElementById("4") as HTMLTitleElement;

        if (message != "") {
            id1.style.display = "none";
        } else {
            id1.style.display = "initial";
        };
        if (name != "") {
            id2.style.display = "none";
        } else {
            id2.style.display = "initial";
        };
        if (emailContado != "") {
            id3.style.display = "none";
        } else {
            id3.style.display = "initial";
        };
        if (numero != "") {
            id4.style.display = "none";
        } else {
            id4.style.display = "initial";
        };
    }, [message, emailContado, numero, name]);

    return (
        <>
            <div ref={goToContact} className="form">
                <h1>Envie uma Mensagem</h1>
                <div className="line"></div>
                <h3>Um email será enviado para o proprietário</h3>
                <form>
                    <div className="all-inputs">
                        <div className="focus">
                            <h3 className="placeholder" id="1">Escreva sua mensagem</h3>
                            <textarea onChange={(e) => {setMessage(e.target.value)}}></textarea>
                        </div>
                        <div className="inputs">
                            <div className="focus">
                                <h3 className="placeholder" id="2">Seu nome</h3>
                                <input type="text" onChange={(e) => {setName(e.target.value)}}/>
                            </div>
                            
                            <div className="focus">
                                <h3 className="placeholder" id="3">Seu email</h3>
                                <input type="text" onChange={(e) => {setEmailContato(e.target.value)}}/>
                            </div>

                            <div className="focus">
                                <h3 className="placeholder" id="4">Seu número de telefone</h3>
                                <input type="text" onChange={(e) => {setNumero(e.target.value)}}/>
                            </div>
                            <label>Tenho filho/a/s com síndrome de down?</label>
                            <select value={selectValue} onChange={handleSelect}>
                                <option value="sim">Sim</option>
                                <option value="não">Não</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Enviar Mensagem</button>
                </form>
            </div>
        </>
    );
};

export default Form;