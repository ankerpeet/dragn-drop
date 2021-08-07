import $ from "jquery";
import "./styles/core.css";
import "./styles/sample-theme.css"

class Dragon {
    constructor(options) {
        console.log("constructor")
        this.options = {
            switch: options?.switch ? options.switch : false
        };
        this.coords = { x: 0, y: 0 };
        this.clickCoords = { x: 0, y: 0 };  
        this.initEvents();
    }
    reset() {
        $("body").off("mousemove");
        $(".dragn-den").off("mouseenter");
        $(".dragn-den").off("mouseup");
        this.clickCoords.x = 0;
        this.clickCoords.y = 0;
        this.coords.x = 0;
        this.coords.y = 0;
        $(".dragn-den").removeClass("dragn-den-hover");
    }
    initEvents() {
        console.log("init")
        var self = this;
        $(".dragn-grab").on("mousedown",function(event){
            var dialog = $(this).parent();
            console.log("test", dialog)
            self.clickCoords.x = event.clientX - self.coords.x;
            self.clickCoords.y = event.clientY - self.coords.y;
    
            $("body").on("mousemove", function(event){
                self.coords.x = event.clientX - self.clickCoords.x;
                self.coords.y = event.clientY - self.clickCoords.y;
                dialog.css({"top": self.coords.y, "left": self.coords.x, "pointer-events" : "none"});
                $(".dragn-den").on("mouseenter", function() {
                    $(".dragn-den").removeClass("dragn-den-hover");
                    $(this).addClass("dragn-den-hover");
                });
            });
            
            $(".dragn-den").on("mouseup", function(){
                $(this).append(dialog);       
                self.reset();
                dialog.css({"top": self.coords.y, "left": self.coords.x, "pointer-events" : "initial"});                
            });      
            
            $("body").on("mouseleave", function(){   
                self.reset();
                dialog.css({"top": self.coords.y, "left": self.coords.x, "pointer-events" : "initial"});                
            });
        });
    }
}

function DragnDrop(options) {
    return new Dragon(options);
}

export default DragnDrop;