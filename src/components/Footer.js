import trainer from '../assets/trainer.gif'

function Footer() {
    return (
        <div className=" w-full  mt-20 " >
            <div className='flex justify-center items-center' >
            <img className='w-40' src={trainer} alt='trainer'></img>
            <div>
                <div className='flex' >
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/piyush-sakhare-4a8035129/' ><img alt='linkedin' className='w-16 h-16' src="https://img.icons8.com/stickers/100/000000/linkedin-circled.png"/></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/piyushsakhare' ><img alt='github' className='w-16 h-16' src="https://img.icons8.com/stickers/100/000000/github.png"/></a>
                    <a target='_blank' rel="noreferrer" href='https://twitter.com/piyushsakhare_' ><img alt='twitter' className='w-16 h-16' src="https://img.icons8.com/stickers/100/000000/twitter.png"/></a>
                </div>
            </div>
            </div>
            <br></br>
            <p className='justify-center flex' >gifs by .<a className='text-green-500' href='https://millivedder.tumblr.com/' rel="noreferrer" target='_blank' >@millivedder</a></p><br></br>
            <a className='flex justify-center items-center' href='https://piyushsakhare.netlify.app' target='_blank' rel="noreferrer">
            <p className="text-sm play2p mx-3" >Built by</p>
                <h1 className='rounded-full dark:border-white border-gray-800 border-2 w-9 play2p p-1' >Pi.</h1>
                <span className="mx-3 play2p font-medium text-sm ">Piyush Sakhare</span>
            </a>
        </div>
    )
}

export default Footer;