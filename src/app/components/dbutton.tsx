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
            <button className="text-white hover:text-md hover:font-extrabold hover:border-b-blue-800/60 hover:border-b-2 text-sm font-medium text-shadow transition-colors duration-200 cursor-pointer"
             onClick={() => console.log(buttonPage)}>{buttonName}</button>
        </>
    )
}