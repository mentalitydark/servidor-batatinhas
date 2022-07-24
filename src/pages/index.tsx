import { useState } from "react";
import Button from "src/components/Button";
import Hint from "src/components/Hint";
import Input from "src/components/Input";
import Layout from "src/components/Layout";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Layout
            className="pt-10 pb-3"
        >
            <div className={`
                w-full px-10
            `}>
                <Input
                    label="E-mail"
                    type="text"
                    onChange={setEmail}
                    value={email}
                    className="mb-6"
                />
                <div>
                    <Input
                        label="Senha"
                        type="password"
                        onChange={setPassword}
                        value={password}
                    />
                    <Hint
                        text="Não é a mesma senha do Minecraft"
                        className="text-yellow-300"
                    />
                </div>
                <div className={`
                    flex flex-col justify-center items-center w-full
                    mt-5 
                `}>
                    <Button
                        text="entrar"
                        onClick={() => console.log('a')}
                    />
                    <div className={`
                        flex flex-col justify-start
                    `}>
                        <Hint
                            text="Ainda não tem uma conta no nosso servidor?"
                            className="text-white mt-3"
                        />
                        <Hint
                            text="Clique aqui para criar uma!"
                            className="text-cyan-400 cursor-pointer"
                            onClick={() => console.log('a')}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
