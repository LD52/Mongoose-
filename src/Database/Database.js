import mongoose from "mongoose";
const server = "127.0.0.1:27017";
const database = "Mongoose"


class Database{ 


    constructor(){

        this.__connect();
    }

    __connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(
            () => {
                console.log('we have a succes connexion')
            }
        )
        .catch(err => console.log("la connexion à la bd a échoué" + err))

    }

}

export default Database;