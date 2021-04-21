import AddData from './AddData'
import DisplayData from './DisplayData'

export default function Homepage() {
    return (
        <div style={{minHeight: '100vh'}} className="bg-blue-500 pb-4">
            <h2 className="bg-blue-700 text-white px-2 py-3 ">NOTE:
            Please check your nearest <b>Jan Aushadhi Kendra</b> for Remdesivir and please take patient's aadhar card, covid positive report, original prescription, and aadhar of the person buying the medicine.
            </h2>
            <h2 className="bg-yellow-700 text-white text-sm px-2 py-3 ">NOTE: visit <a target="_blank" href="https://covid19-twitter.in"><b>Here</b></a> to get even more info from twitter regarding resources
            </h2>
            <AddData/>
            <DisplayData/>
        </div>
    );
}
