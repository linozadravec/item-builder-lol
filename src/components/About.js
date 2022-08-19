import '../css/about.css'

export default function About(){
    return <div className='about--content'>
            <h1 className='about--title'>About</h1>
            <p className='about--text'>This project was made to test and expand knowledge in React.js as well as to finally learn item recipes in League of Legends.</p>

            <p className='about--text'>If you would like to check the source code and give feedback or help expand the project be sure to check out the repository: <a href="https://github.com/linozadravec/item-builder-lol">Github</a></p>

            <p className='about--text'>In the event you don't own a Github account and would like to suggest a feature or report a bug you can use the following email: <a href="mailto:itembuilder.lol@gmail.com">itembuilder.lol@gmail.com</a></p>

            <p className='about--text'>In case you want to support the project you can check out the button on the top-right of the website</p>
    </div>;
}
