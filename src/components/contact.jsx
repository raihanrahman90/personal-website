const contact = ({icon, title, text})=>{
    return(
        <div className='mx-auto'>
            <div className='rounded-full w-16 h-16 text-4xl bg-slate-200 text-center align-middle pt-1 mx-auto'>
                <div className="mx-auto inline-block pt-2">
                    {icon}
                </div>
            </div>
            <div className='font-bold text-md text-center mt-2'>
                {title}
            </div>
            <div className='text-md text-center'>
                {text}
            </div>
        </div>
    )
}
export default contact