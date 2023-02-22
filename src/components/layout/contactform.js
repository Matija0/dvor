
const ContactForm=()=>{
    return(
        <div className="contact-form ">
       <div style={{background:"rgba(10,20,30,0.5)"}}>
       <div className="container d-flex">
            <div className='mt-auto mb-auto'>
                <h1 className=" mt-5 heading text-white">Rezervirajte stol</h1>
            </div>
             </div>
             <div className="container my-3 py-3">
                <form>
                    <select>
                        
   <option value="volvo">Val</option>
                      
                 
                    
                    </select>
                </form>
             </div>
             <div className="container mt-3 py-3">
                <div className="d-flex justify-content-between ">
                    <div className="mt-auto mb-auto text-white">        <p>U par jednostavnih koraka osiguraj svoje mjesto za stolom i uživaj u nezaboravnim jelima</p></div>
             <div className="mt-auto mb-auto text-white">
     
                <span>+ 385 65655656 <br/> info@dvor.hr <br/>  Primošten</span>
             </div>
                </div>
             </div>
       </div>
        </div>
    )
}

export default ContactForm;