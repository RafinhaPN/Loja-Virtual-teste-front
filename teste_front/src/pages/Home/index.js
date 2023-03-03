import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Botoes from '../../components/Botoes';
import './home.css';

const App = () => {
    const [open, setOpen] = useState(false);
    const [, setData] = useState([])
    const [foto0, setImagem1] = useState([]);
    const [foto1, setImagem2] = useState([]);
    const [foto2, setImagem3] = useState([]);
    const [foto3, setImagem4] = useState([]);
    const [descriptionShort, setDescriptionShort] = useState([]);
    const [price, setPrice] = useState([]);
    const [productName, setProductName] = useState([])

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    async function Listar() {
        await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.products)
                setData(responseJson.products);
                setImagem1(responseJson.products[0])
                setImagem2(responseJson.products[0])
                setImagem3(responseJson.products[0])
                setImagem4(responseJson.products[0])
                setDescriptionShort(responseJson.products[0])
                setPrice(responseJson.products[0])
                setProductName(responseJson.products[0])

            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        Listar();
    }, [])
    return (
        <div className='container'>
            <Botoes />
            <button className='bloco' onClick={onOpenModal}>
                <div className='fotos'>
                    <div className='produtos'>
                        <img src={foto0.photo} alt="" />
                        <p className='texto'>{descriptionShort.descriptionShort}</p>
                        <p className='texto'>{price.price}</p>
                        <p className='texto'>{productName.productName}</p>
                        <button>Compra</button>
                    </div>
                    <div className='produtos'>
                        <img src={foto1.photo} alt="" />
                        <p className='texto'>{descriptionShort.descriptionShort}</p>
                        <p className='texto'>{price.price}</p>
                        <p className='texto'>{productName.productName}</p>
                        <button>Compra</button>
                    </div>
                    <div className='produtos'>
                        <img src={foto2.photo} alt="" />
                        <p className='texto'>{descriptionShort.descriptionShort}</p>
                        <p className='texto'>{price.price}</p>
                        <p className='texto'>{productName.productName}</p>
                        <button>Compra</button>
                    </div>
                    <div className='produtos'>
                        <img src={foto3.photo} alt="" />
                        <p className='texto'>{descriptionShort.descriptionShort}</p>
                        <p className='texto'>{price.price}</p>
                        <p className='texto'>{productName.productName}</p>
                        <button>Compra</button>    
                    </div>
                   
                </div>
                  
            </button>


            <Modal open={open} onClose={onCloseModal} center>
                <h2 style={{colo:"red"}}>Produtos relacionado:</h2>
                <hr />
                <div className='bloco'>
                    <div className='produtos'>
                        <img src={foto3.photo} alt="" />
                    </div>
                    <div className='produtos'>
                        <p className='texto'>{descriptionShort.descriptionShort}</p>
                        <p className='texto'>{price.price}</p>
                       <p className='texto'>{productName.productName}</p>
s                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default App;

