import logo from './logo.svg';
import './App.css';
import { MdEmail } from 'react-icons/md';
import { GiPadlockOpen, GiPadlock } from 'react-icons/gi';
import { useState } from 'react';

function App() {
const [activePassword, setActivePassword] = useState(true)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [msg, setMsg] = useState('')


  return (
    <div className="App2">
    <div className="App">
      <div className="Main">
        <div className="Title">
          <h4 className="Title"> Login </h4>


        </div>
        <script src="./js/scripts.js" defer> </script>

        <form action ="">
        <div className="ContetInputEmail">
       
        <MdEmail size={35} color="#adb5bd"/>
        
        <input className="InputEmail" id= "Email" placeholder="E-mail"
        value={email}
        onChange={(e)=> { 
          setEmail( e.target.value ) 
        }}
         />
        

        </div>

        <div 
        className="ContetInputPassword"  
        >
          
        {activePassword ?  <GiPadlock size={30} color="gray" onClick={() =>{
          setActivePassword(!activePassword)
        }} /> : <GiPadlockOpen size={30} color="gray" onClick={() =>{
          setActivePassword(!activePassword)
        }}

        value={password}
        onChange={(e)=> { 
          setPassword( e.target.value ) 
        }}
        
        />}
            
        

        
          
                <input 
                className="InputPassword" 
                id="password"
                 type={activePassword ? "Password" : "text" }
                 placeholder = "Password"
                 maxlength="8"
                 />
            

          

        </div>
      
        <alert variant='warning' className="alert">
          {msg} 
        </alert>
        
        
        <div classname ="Button">
        <button class="InputButton"
        type="button" id="cadastrar" 
        onClick={() => {
                  if (email == '') {
                    setMsg('Preencha o email')
                    return false
                  }
                  if (password == ''){
                    setMsg('Preencha a senha')
                    return false
                  }
                 if (email != '' && password != '') { 
                  setMsg('')
                 }
                }}
        >
    CADASTRAR
    
</button>




<button class="InputButton2"
        type="button">
    LOGIN
</button>
</div>
</form>

          

        </div>
       



 </div>
 </div>

 
 
    
  );
}

export default App;
