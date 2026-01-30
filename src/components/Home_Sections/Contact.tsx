const Contact = () => {
    return (  
        <div className="bg-[rgb(8,8,8)] h-[100vh] flex flex-col gap-2 p-20 justify-center items-center text-white">
            <h1 className="max-sm:text-xl text-5xl font-bold">Let's collaborate...</h1>
            <p className="max-smtext-[12px] text-[16px]">atheojester@gmail.com</p>
            <div className="flex gap-2 mt-5">
                <a href="https://www.linkedin.com/in/atheojester23/" target="_blank" className="hover:-translate-y-1 duration-300">
                    <i className="devicon-linkedin-plain max-sm:text-4xl text-5xl"></i>
                </a>
                <a href="https://github.com/AtheoJester23" target="_blank" className="hover:-translate-y-1 duration-300">
                    <i className="devicon-github-original max-sm:text-4xl text-5xl"></i>
                </a>
            </div>
        </div>
    );
}
 
export default Contact;