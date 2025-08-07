  /* To Disable Inspect Element */
      document.oncontextmenu = () => {
        return false
      }

      document.onkeydown = e => {
        //prevent F12
        if(e.key == "F12") {
            return false
        } 
        if(e.ctrlKey && e.key == "u") {
            return false
        }    
        if(e.ctrlKey && e.key == "c") {
            return false
        }  
        if(e.ctrlKey && e.key == "s") {
            return false
        }  
        if(e.ctrlKey && e.key == "v") {
            return false
        }     
      }