import {useState} from 'react'
import axios from 'axios'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Stack,
    Input,
    Select
  } from "@chakra-ui/react"
export default function AddRecovered() {  
    const [response, setResponse] = useState("") 
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
    const [contact, setContact] = useState(null)
    const [bloodgroup, setBloodgroup] = useState("")
    const [dor, setDor] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSubmit= async (e)=>{
        e.preventDefault()

        function phonenumber()
        {
        var phoneno = /^\d{10}$/;
        if(contact.match(phoneno))
            {
                console.log("phone number is valid")
                return true;
            }
            else
            {
                console.log("phone number is invalid")
                return false;
            }
        }

        const mongodata = {
            name,
            age,
            contact,
            bloodgroup,
            dor,
            state,
            city
       };

       if(phonenumber())
       {
           
        await axios.post('/api/recovered', mongodata)
        .then(res => {
            // console.log("res is ",res)
            setResponse(res.data.message)
            if(res.data.message==='Details added successfully')
            {
                setName("")
                setAge("")
                setContact("")
                setBloodgroup("")
                setState("")
                setCity("")
                setDor(null)
            }

        })
        .catch(err=>{  
            console.log("error is ",err.response.data)  
            setResponse(err.response.data)
        })
       }
       else
       {
           setResponse("Invalid phone number")
       }
    }
    return (
        <div onClick={onOpen} className="action-card pointer-on-hover text-center bg-gray-800 flex items-center text-white p-4 m-4">
               <div>
               <h3 className="pb-4 text-3xl"> Have you recently recovered from Covid?</h3>
               <h6 className="">Add Yourself to our database</h6>
               </div>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Recovered Patient Info</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Stack spacing={3}>
                    {
                        response?(<h3 className="text-xs bg-yellow-200 p-2">{response}</h3>):(<></>)
                    }
                    <Input
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        size="sm"
                        variant="flushed"
                        value={name}
                        required
                    />
                    <Input
                        type="number"
                        placeholder="Age"
                        size="sm"
                        variant="flushed"
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="Contact Number"
                        size="sm"
                        variant="flushed"
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                        required
                    />
                    <Select
                        size="sm"
                        variant="flushed"                                    
                        value={bloodgroup}
                        onChange={(e)=>setBloodgroup(e.target.value)}
                    >
                        <option value="" >Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="A">A Unknown</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="B">B Unknown</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="AB">AB Unknown</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="O">O Unknown</option>
                    </Select>
                    <h5 className="text-sm p-1 bg-blue-200">Enter date of recovery below:</h5>
                    <Input
                        type="date"
                        placeholder="Date of Recovery"
                        size="sm"
                        variant="flushed"
                        value={dor}
                        onChange={(e)=>setDor(e.target.value)}
                    />
                     <Select
                        size="sm"
                        variant="flushed"                                    
                        value={state}
                        onChange={(e)=>setState(e.target.value)}
                        required
                    >
                        <option value="" >Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </Select>
                    <Input
                        type="text"
                        placeholder="City"
                        size="sm"
                        variant="flushed"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                        required
                    />
                    <h6 className="text-xs p-1 bg-green-200">By Clicking on the submit button you acknowledge that this data will be displayed in public.</h6>
                </Stack>
                </ModalBody>
                <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button onClick={handleSubmit} variant="ghost">Submit</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </div>
    );
}