
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

function Layout({ children, title, description, backButton }) {
  return (

    <div>
            <Head>
                <title> {title} </title>
                <meta name = "description" content = {description} />
            </Head>
            <div className="container">
            <nav>
            { backButton && (
                <span onClick = { () => Router.back()  } className = "back-button" > &#8617; </span> 
            ) }
                <Link href = "/">
                    <a className = "container_title"> 
                        Hacker Next
                    </a>
                </Link>
            </nav>

            {children}

            <footer>
                <div>  Hacker Next &copy; 2019 </div>
                <div>Created with a course by Reed Barger / Universal React with Next.js</div>    
            </footer>
  
            </div>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    padding: 0;
                    margin: 0 auto;
                    background: #f2f2f2;
                }
                nav {
                    background: #f60;
                    padding: 1em;
                    color:red;
                    font-weight: bold;
                }
                nav > * {
                    display: inline-block;
                    color: black;
                }
                nav a {
                    text-decoration: none;
                }
                nav .main-title {
                    font-weight: bold;
                }
                nav .back-button {
                    font-size: 1.2rem;
                    padding-right: 1em;
                    cursor: pointer;
                }
                footer {
                    font-size: 0.8rem;
                    text-align: center;
                    padding: 0.5rem 0.5rem;
                }
        `}</style>
        <style global jsx>{`
            body {
                background: #595959;
                font-family: Verdana, Geneva, sans-serif;
                margin: 0 auto;
            }
        `}</style>
    </div>
  )
}

export default Layout