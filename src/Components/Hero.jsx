import React from 'react'

const Hero = () => {
    return (
        <div className="hero-section p-5 bg-stone-300">
            <div className='container '>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="profile-card bg-gray-600  flex flex-col items-center rounded-[20px] p-4">
                            <img src="/src/images/profile.jpg" className='profile w-60 h-60 object-cover mb-4' alt="profile image" />
                            <div className="content">
                                <div className="title text-white text-3xl text-center">Birgül Özhan</div>
                                <div className="job-title text-center text-gray-400">Front-end Developer</div>
                                <div className="short-text text-white text-center mt-2 text-sm">
                                    Sakarya Üniversitesi Matematik Bölümü mezunuyum. 1 yıldır bir ajans bünyesinde Front-end Developer olarak çalışıyor, kullanıcı odaklı arayüzler geliştiriyorum.
                                </div>
                                <ul className='p-3'>
                                    <li className='text-white'>
                                        Mail: <a href="mailto:birgulozhan9@gmail.com" className='underline' target="_blank">birgulozhan9@gmail.com</a>
                                    </li>
                                    <li className='text-white'>
                                        Linkedin: <a href="https://www.linkedin.com/in/birgul-ozhan00/" className='underline' target="_blank">https://www.linkedin.com/in/birgul-ozhan00/</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 flex justify-center">
                        <div className="relative pl-1 border-l-2 border-gray-600">

                            {/* Proje Kutusu 1 */}
                            <div className="relative mb-10 w-[350px]">
                                {/* Nokta */}
                                <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>

                                {/* Kutunun kendisi */}
                                <a href="https://www.serrezistans.com/" target="_blank"
                                className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:scale-[1.01] ml-4 max-w-[600px]">
                                    <img
                                        src="/src/images/header-logo.png"
                                        alt="project logo"
                                        className="w-full h-48 object-contain bg-gray-600 p-4"
                                    />
                                    <div className="p-4">
                                        <div className="text-xl font-semibold mb-2">Ser Rezistans</div>
                                        <p className="text-gray-600 text-sm">
                                            Click to Peak bünyesinde front-end developer olarak çalıştığım dönemde Laravel Blade yapısı kullanarak CMS sistemiyle ön yüzünü kodladım.
                                        </p>
                                    </div>
                                </a>
                            </div>

                            {/* Proje Kutusu 2 */}
                            <div className="relative mb-10 w-[350px]">
                                <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>

                                <a
                                    href="https://www.tlgmaterials.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:scale-[1.01] ml-4 max-w-[600px]"
                                >
                                    <img
                                        src="/src/images/tlg-logo.png"
                                        alt="project logo"
                                        className="w-full h-48 object-contain bg-gray-600 p-4"
                                    />
                                    <div className="p-4">
                                        <div className="text-xl font-semibold mb-2">TLG Materials</div>
                                        <p className="text-gray-600 text-sm">
                                            Click to Peak bünyesinde front-end developer olarak çalıştığım dönemde Laravel Blade yapısı kullanarak CMS sistemiyle ön yüzünü kodladım.
                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
