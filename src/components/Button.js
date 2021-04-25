import React from 'react'

function Button({button}) {
    return (
        <div className="Button">
        <button class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
        {button}
        </button>
        </div>
    )
}

export default Button
