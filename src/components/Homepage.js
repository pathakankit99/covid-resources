import AddData from './AddData'
import DisplayData from './DisplayData'

export default function Homepage() {
    return (
        <div style={{minHeight: '100vh'}} className="bg-blue-500">
            <h2 className="bg-blue-700 text-white px-2 py-3">NOTE:
            Please check your nearest <b>Jan Aushadhi Kendra</b> for Remdesivir and please take patient's aadhar card, covid positive report, original prescription, and aadhar of the person buying the medicine.
            </h2>
            <AddData/>
            <DisplayData/>
            <h3 className="bg-blue-700 text-white absolute bottom-0 px-2 py-3 w-full ">Note: Let's unite in this fight against covid. Share the info on the website and contribute to the site. contact <a target="_blank" href="https://instagram.com/pathakankit99">Ankit Pathak</a> for website related problem</h3>
        </div>
    );
}
