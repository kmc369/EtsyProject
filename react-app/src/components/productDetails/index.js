import React, { useEffect, useState,ReactDOM } from "react";
import { useDispatch,useSelector  } from "react-redux";
// import * as ReviewActions from '../../store/review'
import * as ProductActions from '../../store/products'
import { useParams,useHistory } from "react-router-dom";
import CreateReview from "../createReview";
import OpenModalButton from "../OpenModalButton";
import './details.css'
import EditReview from "../EditReview";
import DeleteReview from "../DeleteReview";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import * as SessionActions from '../../store/session'



const ProductDetails = () =>{

    const dispatch = useDispatch()
   

    const {product_id} = useParams()
    const product_id_num = Number(product_id)
    const [product,setProduct]=useState({})
    // const [reviews, SetReviews] = useState([])
    const history = useHistory()
    const sessionUser = useSelector(state=>state.session.user)

function dateFormat(timestamp){

    const date = new Date(timestamp);
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthYearFormat = `${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  return monthYearFormat;
  }


    useEffect(()=>{
        async function fetchData (){
            const product = await dispatch(ProductActions.getProductByIdThunk(product_id_num))
           setProduct(product)
        //    const reviews = await dispatch(ReviewActions.getAllReviewsThunk())
        // const product_reviews = await dispatch(c)
            
    
        }
       
        fetchData()
      
    },[dispatch,product_id_num])
    // console.log("the product is", product)
    const reviews  = product.reviews

    const handleCreateReview = async (reviewData) => {
     
        await dispatch(ProductActions.createReviewThunk(product.id, reviewData));
        const updatedProduct = await dispatch(ProductActions.getProductByIdThunk(product_id_num));
        setProduct(updatedProduct);
      };

      const handleEditReview = async (id, reviewData) => {
     
        await dispatch(ProductActions.editReviewThunk(id, reviewData));
        const updatedProduct = await dispatch(ProductActions.getProductByIdThunk(product_id_num));
        setProduct(updatedProduct);
      };

      const onDeleteReview = async (id, index) => {
     
        await dispatch(ProductActions.deleteReviewThunk(id, index));
        const updatedProduct = await dispatch(ProductActions.getProductByIdThunk(product_id_num));
        setProduct(updatedProduct);
      };

      const addToCart = async () =>{
      
         await dispatch(SessionActions.addToCartThunk(product.id,sessionUser.shopping_cart.id))
         await dispatch(SessionActions.getUserProductThunk(sessionUser.id))
        history.push(`/shopping_cart/${sessionUser.shopping_cart.id}/user/${sessionUser.id}`)
      }
  
    if(Object.keys(product).length===0){
     
        return null
    }



   

    
    return (
       <>
      <div className="product-entire-container">
      <div className="product-center-container">
    <div className="carouselandcard">

        <Carousel  >
    
       
                <div  >
                <img className="main-image" src={product.image} />   
              </div>

        
         
                <div>
                <img src={product.image1}/>
         
                </div>
                <div>
                <img src={product.image2}   />
                
                </div>

                <div>
                <img src={product.image3}  />
                
               
                </div>
            
            </Carousel>

            <div className="add-to-cart-container">
              <div><p className="cart-items-words">In demand. 3 people bought this in the last 24 hours.</p></div>
              <div><span className="cart-item-cost">${product.price}</span><span className="price-cross">234.00</span></div>
              <div><p className="cart-item-sale">72% off sale ends October 31st</p></div>
              <div><div className="cart-items-title">{product.title}</div></div>
              <div><i class="fa-solid fa-location-dot" style={{color:"rgb(81, 181, 242)",fontSize:"19px"}}></i><span className="ship-from">Ships From NY</span></div>
              <div>
              <label for="dropdown" className="quanity">Quanity and Amount <span className="star-icon">*</span></label>
                <br></br>
                <br></br>
                    <div> 
                      <select id="dropdown" name="dropdown">
                      <option  value="option1">Order Bulk</option>
                      <option  value="option2">Order single item </option>
                      <option c value="option3">Order for party</option>
                    
                    </select>
                    </div>
                
                </div>
              {sessionUser &&
              <>
            <button className="buy-button" onClick={addToCart}>Buy it now</button>
            <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
            </>
              }
            </div>



            </div>`








<div className="div-and-description">

        <div className="review-container-location">
   
        <div className="header-reviews">
            <div className="header-stars1" >{reviews.length}  reviews</div>
            <span className="heade-starts2"> ★ ★ ★ ★ ★</span>
        
      {sessionUser && sessionUser.id !== product.user.id &&
        <OpenModalButton className="createreview-button"   modalComponent={<CreateReview prop={product} onCreateReview={handleCreateReview}/>} buttonText="Leave a review"/>
      }
         </div>

        {reviews
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((element,index)=>(
            <div className="review-container1">
            
            <div key={index} className="star-container1" >
            {Array.from({length:element.stars}).map((_,starIndex) => (
            
                <span key={starIndex}>  ★</span>
               
            ))}
              </div>
           
             <div className="desc-container">
             {element.description}
             </div>

            

             <div className="purchased-items"> 
                <p className="para-date">purchased item: <u>{product.title}</u></p>
             </div>

             <div className="image-items"> 
                <img className="para-date" style={{height:"60px",width:"60px",borderRadius:"8px"}} src={product.image}/>
             </div>

             <div className="user-items"> 
               <img src={product.reviews[index].user.image} style={{height:"30px",width:"30px",borderRadius:"20px"}}/>
               <div> <u>{product.reviews[index].user.username}</u> </div>
               <div className="para-date">{dateFormat(element.created_at)}</div>
             </div>

             <div> 
              {sessionUser && sessionUser.id === element.user.id &&
              <>
                <OpenModalButton  className="deletereviewButton"  modalComponent={<EditReview prop={element} index={index} onEditReview={handleEditReview}/>}  buttonText={<i class="fa-solid fa-pen-to-square"></i>}/>
                <OpenModalButton className="editReview" modalComponent={<DeleteReview prop={element} index={index} onDeleteReview={onDeleteReview}/>} buttonText={<i class="fa-solid fa-trash"></i>}/>
              </>
              }
            </div>
            </div>

   
            
          
             ))}
             

        </div>

        <div className="prod-details-desc-container">
          
              <div><h2>Item details</h2></div>

              <div ><i class="fa-regular fa-user" style={{color: "#000000" ,marginRight:"9px"}}></i>{product.creator}</div>
              {product.handmade &&
              <div><i class="fa-solid fa-hand" style={{color: "000000",marginRight:"9px"}}></i>Handmade</div>
              }
               {product.vintage &&
              <div><i class="fa-solid fa-clock" style={{color: "#000000",marginRight:"9px"}}></i>Vintage</div>
              }

            {product.made_to_order &&
              <div><i class="fa-solid fa-hammer" style={{color: "#000000",marginRight:"9px"}}></i>Made to order</div>
              }

          {product.material &&
              <div><i class="fa-solid fa-paint-roller" style={{color: "#000000",marginRight:"9px"}}></i>Material: {product.material}</div>
             }
             <div className="product-detail-descr">{product.description}</div>
             
        </div>

        </div>
        </div>
        </div>
        </>
    )



}

export default ProductDetails