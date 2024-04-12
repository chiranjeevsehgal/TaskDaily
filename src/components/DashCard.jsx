export default function DashCard({title}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-40 ">
                <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-[400px] mx-auto p-4 bg-gray-200 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
                        <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" alt="banner" />
                        <div className="absolute -right-6 -top-6 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                            <img className="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="avatar" />
                        </div>

                    </div>
                    <div className="mt-16 flex flex-col items-center">
                        <h4 className="text-xl font-bold text-gray-700">
                            {title}
                            
                        </h4>
                        {/* <p className="text-base font-normal text-gray-600">Product Manager</p> */}
                    </div>
                    <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                        
                        <div className="flex flex-col items-center justify-center">
                            <a
                                href={ title ==="DSA" ? "/dsa" : "/aptitude"}
                                className="rounded-md bg-green-700 py-2.5 px-4 text-lg font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200">
                                Go to {title} Section
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}