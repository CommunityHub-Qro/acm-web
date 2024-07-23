import Link from "next/link";
import { ContactForm } from "~/app/_components/contact-form";

const Contact = () => {
    return (
        <main className="realtive min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#51088A] to-[#200039] text-white">
            <div className="grid grid-cols-[100px,100px,100px,100pxS] lg:grid-cols-2 grid-rows-[200px,400px,400px,100px] lg:grid-rows-[200px,400px,100px] mx-36">
                <section className="col-span-1 lg:col-span-2 mt-20 lg:-ml-10 text-center lg:text-left">
                    <h1 className="mt-10 lg:mt-0 py-8 text-4xl lg:text-5xl">
                        Contáctanos
                    </h1>
                    <div className="w-96 px-5 lg:px-0 lg:w-max pb-6 text-xs lg:text-sm text-justify">
                        <p>
                            Siéntete libre de contactarnos en cualquier momento. Estamos aquí para ayudarte con cualquier consulta, sugerencia o comentario que tengas.
                        </p>
                        <p>
                            Nuestro equipo se pondrá en contacto contigo lo más rápido posible
                        </p>
                    </div>
                </section>

                <section className="row-start-2 col-span-1 mt-32 lg:mt-16 ml-0 lg:-ml-10">
                    <ContactForm />
                </section>

                <section className="col-start-2 row-start-2 h-96 w-96 mt-14 ml-16 bg-[#8100A1] p-10">
                    <div>
                        <h4 className="mb-10 text-xl ">
                            Informacion de contacto
                        </h4>
                        <ul>
                            <li className="flex items-center mb-14">
                                <img src="images/logos/Email-Icon.png" className="w-9 h-7 mr-6" />
                                <span className="text-sm font-light">
                                    acmtecqro@gmail.com
                                </span>
                                        
                            </li>
                            <li className="flex items-center mb-14">
                                <img src="images/logos/Location-Icon.png" className="w-9 h-9 mr-6" />
                                <span className="text-sm font-light">
                                Tecnologico de Monterrey Campus Queretaro
                                </span>
                            </li>
                            <li className="flex items-center mb-4">
                                <img src="images/logos/Clock-Icon.png" className="w-9 h-9 mr-6" />
                                <span className="text-sm font-light">
                                    9:00am - 7:00pm 
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="flex row-start-4 lg:row-start-3 lg:col-start-2 space-x-6 mt-5 lg:mt-16 ml-32 lg:ml-44">
                    <Link className="rounded-md" href="https://www.instagram.com/acm_qro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <img className="h-7 lg:h-8 hover:bg-[#601982] hover:border-[#66198A] hover:border-2 hover:shadow-[#8F35BA] hover:shadow-lg hover:rounded-xl" src="images/logos/Instagram-Icon.png"/>
                    </Link>
                    <Link className="rounded-md" href="https://chat.whatsapp.com/ERh3ObbVazi0o7NKpoFLAh">
                        <img className="h-7 lg:h-8 hover:bg-[#601982] hover:border-[#66198A] hover:border-2 hover:shadow-[#8F35BA] hover:shadow-lg hover:rounded-xl" src="images/logos/Whatsapp-Icon.png"/>
                    </Link>
                    <Link className="rounded-md" href="https://github.com/CommunityHub-Qro">
                        <img className="h-8" src="images/logos/Github-Icon.png"/>
                    </Link>
                </div>
                
            </div>
        </main> 
        
    );
}

export default Contact;