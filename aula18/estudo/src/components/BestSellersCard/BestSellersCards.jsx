import { FaRegHeart } from "react-icons/fa"
import './BestSellersCards.css'

 function BestSellersCards() {
    return(
        <div className="best-seller">
            <h2>Best Sellers</h2>

            <div className="best-seller-container">
                <ul className="best-seller-list">
                    <li className="best-seller-card">
                        <img src="src/img/BestSellers/BestSeller1.png" alt="Foto de uma modelo mulher vestindo uma calça comprida beje, moleton cinza e calsando tenis branco." />
                        <div className="best-seller_card-container">
                            <div className="best-seller_card_container-l">
                                <p className="card-title">Lorem Ipsum Lorem Ipsum</p>
                                <p className="card-description">Lorem Ipsum</p>
                            </div>
                            <div className="best-seller_card_container-r">
                                <p className="card-price">$999</p>
                            </div>
                        </div>
                        <div className="card-colors">
                            <p className='card_colors-color1'></p>
                            <p className='card_colors-color2'></p>
                            <p className='card_colors-color3'></p>
                        </div>
                        <div className="favorite-icon">
                            <FaRegHeart />
                        </div>
                    </li>

                    <li className="best-seller-card">
                        <img src="src/img/BestSellers/BestSeller2.png" alt="Foto de uma modelo mulher vestindo uma calça comprida beje, moleton cinza e calsando tenis branco." />
                        <div className="best-seller_card-container">
                            <div className="best-seller_card_container-l">
                                <p className="card-title">Lorem Ipsum Lorem Ipsum</p>
                                <p className="card-description">Lorem Ipsum</p>
                            </div>
                            <div className="best-seller_card_container-r">
                                <p className="card-price">$999</p>
                            </div>
                        </div>
                        <div className="card-colors">
                            <p className='card_colors-color1'></p>
                            <p className='card_colors-color2'></p>
                            <p className='card_colors-color3'></p>
                        </div>
                        <div className="favorite-icon">
                            <FaRegHeart />
                        </div>
                    </li>

                    <li className="best-seller-card">
                        <img src="src/img/BestSellers/BestSeller3.png" alt="Foto de uma modelo mulher vestindo uma calça comprida beje, moleton cinza e calsando tenis branco." />
                        <div className="best-seller_card-container">
                            <div className="best-seller_card_container-l">
                                <p className="card-title">Lorem Ipsum Lorem Ipsum</p>
                                <p className="card-description">Lorem Ipsum</p>
                            </div>
                            <div className="best-seller_card_container-r">
                                <p className="card-price">$999</p>
                            </div>
                        </div>
                        <div className="card-colors">
                            <p className='card_colors-color1'></p>
                            <p className='card_colors-color2'></p>
                            <p className='card_colors-color3'></p>
                        </div>
                        <div className="favorite-icon">
                            <FaRegHeart />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
 }

 export default BestSellersCards