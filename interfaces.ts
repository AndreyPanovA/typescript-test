interface  Rect {
   readonly id:string
   color?: string
   size: {
       width: number
       height: number
   }

}

const rect1: Rect= {
    id: "12234",
    size: {
        width:20,
        height:30
    }
}
interface RectWithAria extends Rect {
    getArea: ()=> number
}
const rect2: RectWithAria = {
    id:"1", 
    size: {
        width:20,
        height:30
    },
    getArea() {
        return this.size.width * this.size.height
    }
}

//==========================

interface IClock {
    time: Date
    setTime(date: Date) : void

}
class Clock implements IClock {
    time: Date =  new Date
    setTime (date: Date):void {
        this.time =date
  }

}
// ===============
interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: "2px solid red",
    borderRadius: "15px",
    display: "flex"
}
// ===============
// Enums