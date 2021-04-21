import React from "react"
import AddRecovered from './AddRecovered'
import OxygenSupply from './OxygenSupply'
import FoodSupply from './FoodSupply'
import Medicine from './Medicine'
export default function AddData() {
    return (
        <div className="w-full flex justify-evenly flex-wrap items-center">
            <AddRecovered/>
            <OxygenSupply/>
            <FoodSupply/>
            <Medicine/>
        </div>
    );
}