import React from "react";
import "../Hire_us/_hire.scss";


const HireUs = () => {

    return(

        <div className="hire-us-container" id="hire">

            <div class="hireTitle">
                <h2>Hire <span> Us</span></h2>
            </div>

            <section class="contactar">

                <form   action="https://formspree.io/f/mdoyjlrq" method="POST">

                    <div class="nome_form">
                        
                        <label class="enc" for="nome">Name</label>
                        <input type="text" name="Referencia" required/>

                    </div>

                    <div class="email_form">
                        
                        <label class="enc" for="email">Email</label>
                        <input type="email" name="email" required/>

                    </div>

                    <div class="mesg_form">
                    <textarea class="msg" name="mensagem" id="" ></textarea>
                    </div>

                    <button value="send" type="submit">Submit</button>
                    
                </form>

            </section>

        </div>
    )
}

export default HireUs;