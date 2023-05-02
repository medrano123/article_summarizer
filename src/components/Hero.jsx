import { logo } from '../assets';
import { AiFillGithub } from "react-icons/ai";


const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full mb-10 pt-3'>
				<img 
					src={logo} 
					alt="sumz_logo"
					className='w-28 object-contain'
				/>
				{/* <button
					type="button"
					onClick={()=> window.open('https://github.com/medrano123/article_summarizer')}
					className='black_btn'
				>
					Github
				</button>	 */}
				<a target="_blank" href="https://github.com/medrano123/article_summarizer" rel="noreferrer"><AiFillGithub size={50}  /></a>

			</nav>
			<h1 className='head_text'>
				Summarize Articles with <br className='max-md:hidden'/>
				<span className='orange_gradient'>Open AI GPT-4</span>
			</h1>
			<h2 className='desc'>
				Lets be real... you dont want to read all of that...
			</h2>
			

		</header>
	)
}

export default Hero