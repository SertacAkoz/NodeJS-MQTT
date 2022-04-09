class Publish{
    constructor(body){
        this.topic = body.topic
        this.data = {
            id:body.data.id,
            name:body.data.name,
            surname:body.data.surname,
        }
    }
}

exports.Publish = Publish