import React from 'react';
import Link from "react-router-dom/es/Link";


function Card({el}){
        return(
            <div className="card">
                <Link to={('/product?id=' + el.id)}>
                    <div>
                        <img src={'data:image/gif;base64,' + el.productPhotos[0].largePhoto} alt={el.name} />
                    </div>
                    <div>
                        <a className="font-card"> <span>{el.name}</span></a>
                    </div>
                </Link>
                <div>
                    <span><b>Price: {el.listPrice}</b></span>
                </div>
            </div>
        );
    }

export default Card;