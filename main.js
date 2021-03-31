let printer=require("pdf-to-printer")
let fs=require("fs")
let pdf=require("pdf-creator-node")

let buffer=fs.readFileSync("test.html","utf-8")

pdf.create({
    html: buffer,
    path: "output.pdf",
    data:{
        name:"Diary"
    },  
    type: "",
  }, {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
}).then((res)=>{
    printer.print("output.pdf").then(()=>{
        console.log("Done")
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        //fs.unlinkSync("output.pdf")
    })
}).catch((err)=>{
    console.log(err)
})

