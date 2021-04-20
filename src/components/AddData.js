import React from "react"
import AddRecovered from './AddRecovered'
import OxygenSupply from './OxygenSupply'
export default function AddData() {
    return (
        <div className="w-full flex justify-evenly flex-wrap items-center">
            <AddRecovered/>
            <OxygenSupply/>
        </div>
    );
}