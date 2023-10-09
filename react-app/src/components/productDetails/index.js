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
  
    if(Object.keys(product).length===0){
     
        return null
    }



   

    
    return (
        <>


<Carousel dynamicHeight="true" className="main-slide" >
                <div className="main-image">
                <img src={product.image}  height="320px" width="300px"/>   
                  
                </div>
                <div>
                <img src={product.image1} height="320px" width="300px"/>
         
                </div>
                <div>
                <img src={product.image2} height="320px" width="300px" />
                
                </div>

                <div>
                <img src={product.image3} height="320px" width="300px"/>
                
                </div>
            
            </Carousel>










        <div className="review-container-location">
        {/* <CreateReview product={product}/> */}
        <div className="header-reviews">
            <div className="header-stars1" >{reviews.length}  reviews</div>
            <span className="heade-starts2"> ★ ★ ★ ★ ★</span>
        
      
        <OpenModalButton className="createreview-button"  modalComponent={<CreateReview prop={product} onCreateReview={handleCreateReview}/>} buttonText="Leave a review"/>
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



        </>
    )



}

export default ProductDetails