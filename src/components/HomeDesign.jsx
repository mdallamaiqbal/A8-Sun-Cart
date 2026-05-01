import Image from 'next/image';
import banner from '../assets/suncart.png'

const HomeDesign = () => {
    return (
        <div className="container mx-auto">
            <div className='flex flex-col-reverse md:flex-row gap-3 justify-between items-center mt-10 md:mt-20 max-w-7xl mx-auto '>
                <div>
                    <h3 className='text-3xl lg:text-5xl text-center md:text-start text-[#34B0BD] leading-tight font-extrabold'>Summer Sale <br /> <span className='ml-5 text-[#F09633] text-4xl lg:text-7xl '>50%</span> OFF</h3>
                    <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
                        <span className="h-1 w-6 lg:w-12 bg-[#F09633] rounded-full"></span>
                        <p className='text-2xl lg:text-3xl font-bold text-[#34B0BD] uppercase tracking-widest'>Hot Deals 🔥</p>
                    </div>
                </div>
                <div>
                   <Image className=' rounded-3xl w-full max-w-lg object-cover' src={banner} width={400} height={300} alt='banner' />
                </div>
            </div>
        </div>
    );
};

export default HomeDesign;