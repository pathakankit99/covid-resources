import Recovered from './models/recovered'
import {connectToDatabase} from '../../utils/mongodb'
import nextConnect from 'next-connect';

const recovered = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

recovered.get(async(req,res)=>{
    const {db} = await connectToDatabase();
    const collection = db.collection("recovered");
    // console.log(collection)
    try{
          // query for movies that have a runtime less than 15 minutes
            const query = { };
            const options = {
            // sort returned documents in ascending order by title (A->Z)
            sort: { since: -1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { },
            };

        const cursor = await collection.find();

        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
            return res.status(404).send("No documents found")
        }
        // replace console.dir with your callback to access individual elements
        var result=[]
        await cursor.forEach((dir)=>result.push(dir));

        return res.status(200).send(result)
    }
    catch (error){
        console.log(error)
        return res.status(500).send(error.message);
    }
})
// Process a POST request
recovered.post(async(req, res) => {
    const {db} = await connectToDatabase();
        if(req.method === 'POST'){
            const {name, age, contact, bloodgroup, dor, state, city, id} = req.body;
            // console.log(req.body)
            if(name && (contact || id) && state && city)
            {
                
                try{
                    // console.log(req.body)                    
                    const recovered = db.collection("recovered");
                    // Query for a movie that has the title 'The Room'
                    const query = { contact: Number(contact) };
                    // console.log(query)
                    const options = {
                        
                    sort: { since: -1 },
                    // Include only the `name` and `contact` fields in the returned document
                    projection: { _id: 1, name: 1},
                    };
                    const check = await recovered.findOne(query, options);
                    // console.log("checking... ",check)
                    var person = new Recovered;
                    person.name=name;
                    person.age=age;
                    person.contact= contact,
                    person.bloodgroup=bloodgroup;
                    person.dor=dor;
                    person.state=state;
                    person.city=city;
                    person.id=id;
                    // var property = new Property({
                    //     title,
                    //     description,
                    //     imageUrl,
                    //     type,
                    //     accomodation,
                    //     size,
                    //     price,
                    //     categories
                    // });
                    if(!check)
                    {
                        const result = await recovered.insertOne(person);
                        return res.status(200).json({ message: 'Details added successfully' });
                    }
                    return res.status(400).send('This person already exists in database');
                }
                catch (error){
                    console.log(error)
                    return res.status(500).send(error.message);
                }
            }
            else{
                res.status(422).send('Fill all fields');
            }
        }
        else{
            res.status(422).send('Non supported request method');
        }
});

export default recovered;