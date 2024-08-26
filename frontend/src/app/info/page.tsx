import Style from "../style/info.module.css";
import { MdIosShare } from "react-icons/md";

export default function Info() {
    return (
        <body>
            <div className={Style["info-container"]}>
                <div className={Style["info-left-container"]}>
                    <h1>NOME DO TÊNIS</h1>

                    <div className={Style["info-prices"]}>
                        <MdIosShare className={Style["info-icon"]} />
                        <p>A PARTIR DE</p>
                        <h1>R$ ...</h1>
                        <p>12x DE ...</p>
                    </div>

                    <div className={Style["info-sizes"]}>
                        <h1>SELECIONAR TAMANHO</h1>
                        {[40, 41, 42, 43, 44].map(size => (
                            <div key={size} className={Style["sizes"]}>
                                <p className={Style["circle-size"]}>{size}</p>
                                <p>R$ ...</p>
                                <button>SELECIONAR</button>
                            </div>
                        ))}
                    </div>

                    <div className={Style["info-description"]}>
                        <h1>DESCRIÇÃO</h1>
                        <div className={Style["launch-label"]}>
                            <div className={Style["launch-label-left"]}>
                                <h1>LANÇAMENTO</h1>
                                <p>Data de lançamento...</p>
                            </div>
                            <div className={Style["launch-label-right"]}>
                                <h1>MARCA</h1>
                                <p>Marca do tênis...</p>
                            </div>
                        </div>

                        <div className={Style["info-information"]}>
                            <h1>INFO</h1>
                            <p>Descrição completa do tênis</p>
                        </div>
                    </div>

                    <div className={Style["info-btn"]}>
                        <button>ADICIONAR AO CARRINHO</button>
                    </div>
                </div>


                <div className={Style["info-right-container"]}>
                    Right Column
                </div>
            </div>


            <div className={Style["info-carousel"]}>
                <h1>RECOMENDADOS</h1>
                
                <div className={Style["carousel-details"]}>
                    <div className={Style["carousel"]}>
                        <img className={Style['tenis-example']} src="img/example.png" alt="Logo" />
                        <p>Nome do tênis</p>
                        <h1>Preço antigo</h1>
                        <h2>Preço atual</h2>
                        <p>Parcelas</p>
                    </div>
                    <div className={Style["carousel"]}>
                        <img className={Style['tenis-example']} src="img/example.png" alt="Logo" />
                        <p>Nome do tênis</p>
                        <h1>Preço antigo</h1>
                        <h2>Preço atual</h2>
                        <p>Parcelas</p>
                    </div>
                    <div className={Style["carousel"]}>
                        <img className={Style['tenis-example']} src="img/example.png" alt="Logo" />
                        <p>Nome do tênis</p>
                        <h1>Preço antigo</h1>
                        <h2>Preço atual</h2>
                        <p>Parcelas</p>
                    </div>
                    <div className={Style["carousel"]}>
                        <img className={Style['tenis-example']} src="img/example.png" alt="Logo" />
                        <p>Nome do tênis</p>
                        <h1>Preço antigo</h1>
                        <h2>Preço atual</h2>
                        <p>Parcelas</p>
                    </div>
                    <div className={Style["carousel"]}>
                        <img className={Style['tenis-example']} src="img/example.png" alt="Logo" />
                        <p>Nome do tênis</p>
                        <h1>Preço antigo</h1>
                        <h2>Preço atual</h2>
                        <p>Parcelas</p>
                    </div>

                </div>

            </div>
        </body>

    );
}



