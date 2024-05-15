export default function Run() {
    return <div>
        <div className=" min-h-96 min-w-96">
            <select className="float-start rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                <option className="text-sm font-semibold">Gemini AI</option>
            </select>
            <button type="button" className="float-end rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>
    </div>
}