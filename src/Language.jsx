import React,{createContext,useContext,useState} from "react";
 const  langcontext = createContext();
 function Language(){
  const [lang,setLang] = useState("EN");
   return(
    <langcontext.Provider value ={{lang,setLang}}>
        <Header/>
        <Content/>
    </langcontext.Provider>
   )
    }
    function Header(){
         const {lang,setLang}=useContext(langcontext);
         return(
            <div>
                Language:{lang}
                <button onClick={()=>setLang("ENG")}>ENGLISH</button>
                <button onClick={()=>setLang("HI")}> HINDI</button>
            </div>
         )
    }
     function Content(){
         const {lang}=useContext(langcontext)
         return(
            <p>{lang === "ENG" ? "HELLO WORLD": "नमस्ते दुनिया"}</p>
         )
     }
     export default Language;
 