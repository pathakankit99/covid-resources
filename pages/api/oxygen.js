import Oxygen from './models/oxygen'
import {connectToDatabase} from '../../utils/mongodb'
import nextConnect from 'next-connect';

const oxygen = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

oxygen.get(async(req,res)=>{
    const {db} = await connectToDatabase();
    const collection = db.collection("oxygen");
    // console.log(collection)
    try{
          // query for movies that have a runtime less than 15 minutes
            const query = { };
            const options = {
            // sort returned documents in ascending order by title (A->Z)
            sort: { state: 1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { },
            };

        const cursor = await collection.find(query, options);

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
oxygen.post(async(req, res) => {
    const {db} = await connectToDatabase();
        if(req.method === 'POST'){
            const {name, contact, state, city, search} = req.body;    
            const collection = await db.collection("oxygen");
            // console.log(req.body)
            if(search)
            {
                // console.log(collection)
                try{
                    // query for movies that have a runtime less than 15 minutes
                        let query = { state: search };
                        if(search==="All")
                        query={}
                        const options = {
                        // sort returned documents in ascending order by title (A->Z)
                        sort: { state: 1 },
                        // Include only the `title` and `imdb` fields in each returned document
                        projection: { },
                        };

                    const cursor = await collection.find(query, options);

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

            }
            else{
                if(name &&  contact  && state && city)
                {
                    
                    try{
                        // console.log(req.body)
                        // Query for a movie that has the title 'The Room'
                        const query = { contact: Number(contact) };
                        // console.log(query)
                        const options = {
                            
                        sort: { contact: -1 },
                        // Include only the `name` and `contact` fields in the returned document
                        projection: { _id: 1, name: 1},
                        };
                        const check = await collection.findOne(query, options);
                        // console.log("checking... ",check)
                        var person = new Oxygen;
                        person.name=name;
                        person.contact= contact,
                        person.state=state;
                        person.city=city;
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
                            const result = await collection.insertOne(person);
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
        }
        else{
            res.status(422).send('Non supported request method');
        }
});

export default oxygen;