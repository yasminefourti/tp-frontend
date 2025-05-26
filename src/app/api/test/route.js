export async function GET() {
    
    const  data= {
        "prenom":"raphael",
        "ville":"paris",
        "panier":[
            "Farine","lait","oeuf"

        ]
    }



    return Response.json({ data })
}