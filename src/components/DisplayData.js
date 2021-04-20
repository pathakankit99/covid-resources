import Link from 'next/link'
export default function DisplayData() {
    return (
        <div className="w-full flex justify-evenly flex-wrap items-center">
             <div className="action-card pointer-on-hover text-center bg-gray-800 flex items-center text-white p-4 m-4">
                <Link href="/plasma-donors">
                <div>
                <h3 className="pb-4 text-3xl"> Plasma Donors List</h3>
                <h6 className="">Click here</h6>
                </div>
                </Link>
             </div>
             <div className="action-card pointer-on-hover text-center bg-gray-800 flex items-center text-white p-4 m-4">
                <Link href="/oxygen-suppliers">
                <div>
                <h3 className="pb-4 text-3xl"> Oxygen Suppliers List</h3>
                <h6 className="">Click here</h6>
                </div>
                </Link>
             </div>
        </div>
    );
}