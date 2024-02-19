import logo from "../../assets/react.svg"

export default function Header(){
    return(
        <header className="flex flex-col items-center py-8">
             <img className="w-14" src={logo} alt="logo" />
             <h1 className="mt-8 mb-4 text-primary text-4xl font-bold">React Essential</h1>
             <p className="w-1/2 md:w-full md:max-w-screen-lg text-center"><span className="text-secondary font-bold">Crucial</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio autem, consectetur nisi eius quidem vitae fuga? Saepe enim eius quasi nam quod nostrum temporibus voluptatem optio, illo veniam eligendi!</p>
        </header>
       
    )
}