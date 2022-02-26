const Card = ({title, image})=>{
    return(
        <>
            <div className="bg-transparent mx-4 w-4/5 h-20">
                <div className="h-2/3">
                    <img src={image} className="h-full mx-auto my-5"/>
                </div>
                <div className="text-center font-bold mb-5 text-2xl">
                    {title}
                </div>
            </div>
        </>
    );
}
export default Card;