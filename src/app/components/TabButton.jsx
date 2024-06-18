import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
const buttonClasses = active ? 'text-[#2c2319] border-b border-purple-500' : 'text-[#ADB7BE]'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-[#979fa5] ${buttonClasses}`}>
            {children}
            </p>
        </button>
    )
}

export default TabButton;