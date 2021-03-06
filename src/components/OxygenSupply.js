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

export default function OxygenSupply() {
    const [response, setResponse] = useState("") 
    const [name, setName] = useState("")
    const [contact, setContact] = useState(null)
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleSubmit= async (e)=>{
        e.preventDefault()

        function phonenumber()
        {
            var phoneno = /^\d{10}$/;
            var phoneno2 = /^\d{11}$/;
            if(contact.match(phoneno)|| contact.match(phoneno2))
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
            contact,
            state,
            city
       };
       if(phonenumber())
       {
        await axios.post('/api/oxygen', mongodata)
        .then(res => {
            // console.log("res is ",res)
            setResponse(res.data.message)
            if(res.data.message==='Details added successfully')
            {
                setName("")
                setContact("")
                setState("")
                setCity("")
            }

        })
        .catch(err=>{  
            console.log("error is ",err.response.data)  
            setResponse(err.response.data)
        })
       }
       else
       {
           setResponse("Phone number not valid")
       }
    }
    return (
        <div onClick={onOpen} className="action-card pointer-on-hover text-center bg-gray-800 flex items-center text-white p-4 m-4">
               <div>
               <h3 className="pb-4 text-3xl">Do you know oxygen Supplier?</h3>
               <h6 className="">Add to our database</h6>
               </div>
               <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Oxygen Supplier Info</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Stack spacing={3}>
                    {
                        response?(<h3 className="text-xs bg-yellow-200 p-2">{response}</h3>):(<></>)
                    }
                    <h5 className="text-sm p-1 bg-blue-200">All fields are important</h5>
                    <Input
                        onChange={(e)=>setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                        size="sm"
                        variant="flushed"
                        value={name}
                    />
                    <Input
                        type="number"
                        placeholder="Contact Number"
                        size="sm"
                        variant="flushed"
                        value={contact}
                        onChange={(e)=>setContact(e.target.value)}
                    />
                     <Select
                        size="sm"
                        variant="flushed"                                    
                        value={state}
                        onChange={(e)=>setState(e.target.value)}
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