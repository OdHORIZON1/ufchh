import React, {useState} from "react";
import data22 from "./buttonsdata";
import data11 from "./productsdata";
import "./products.css";

 const Products = ()=>{

   const [list, setList] = useState(data11); 

    const handleBClick = (e)=>{
        const value = e.target.innerText.toLowerCase();
        if(value === "all"){
            setList(data11);
            return;
        }
           
        const newList = (data11.filter((item) => value === item.category.toLowerCase()));
        setList(newList);
    
    }

    return(
        <section className="products">
        <h1 className="s-title">
            Our Products
        </h1>
        <div className="buttons">
        {data22.map((but)=>{
            const {id, name} = but;
            return(
                <div onClick={handleBClick} key={id} className="button">{name}</div>
            );
        })}
        </div>
        <div className="product-c">
        {list.map((prod)=>{
            const {id, name, category, info, image, category2} = prod;
            
            return(
                
                  <div key={id} className="producc">
                  <div className="imgg">
                    <img src={image} alt="" />
                  </div>
                    <div className="productinfo">
                      <span className="pname">{name}</span>
                      <span className="categ">{category}</span>
                  </div>
                    <div className="desc">
                        <p>{info}</p>
                    </div>
                    
                    </div>
                            );
        })}
        </div>
         
        </section>
    
    );
 }
 
 export default Products;