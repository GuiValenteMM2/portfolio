'use client';

type buttonProps = {
    buttonName: String,
    buttonPage: String
}

export default function DButton({buttonName, buttonPage}: buttonProps) {

    function openPage() {
        return buttonPage
    }

    return (
        <>
            <button className="bg-blue-700/60 hover:bg-blue-800 text-white font-bold text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
             onClick={() => console.log(buttonPage)}>{buttonName}</button>
        </>
    )
}