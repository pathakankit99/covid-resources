import AddData from './AddData'
import DisplayData from './DisplayData'

export default function Homepage() {
    return (
        <div style={{minHeight: '100vh'}} className="bg-blue-500">
            <AddData/>
            <DisplayData/>
        </div>
    );
}
