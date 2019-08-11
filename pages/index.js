
import axios from 'axios';
import { Component } from 'react'
import Story from '../components/Story';
import Layout from '../components/Layout';
import Link from 'next/link';

export default class Index extends Component {
    static async getInitialProps({req, res, query}) {
       
        let stories;
        let page;
        try {
            page = Number(query.page) || 1;
            const res =  await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = res.data;
            
          
        } catch (error) {
            stories = [];
        }
        return {stories, page};
    }

    
    render() {
        const { stories, page } = this.props;
        return (
            <Layout title = "Hacker Next" description = { "Hacker News Clone made with Next.js " } >
                <h1>Hacker Next Main Stories</h1>
                <Story stories = {stories}/>

                <footer>
                    {
                        page > 1 ?
                        <div className = "pagination">
                            <Link href = {`/?page=${page -1 }`}> 
                                <a> Previous Page { (page -1 )  }  </a>
                            </Link> 
                            <Link href = {`/?page=${page + 1}`}> 
                                <a> Next Page { (page + 1)  }  </a>
                            </Link>
                        </div>
                      : 
                        <div className = "pagination">
                            <Link href = {`/?page=${page + 1}`}> 
                                <a> Next Page { (page + 1 || 2)  }  </a>
                            </Link>
                        </div>
                    }
                  
                </footer>
              
                <style jsx>{`
    
                    footer {
                        padding: 1em;
                    }
                    footer a {
                        font-weight: bold;
                        color: black;
                        text-decoration: none;
                    }
                    h1 {
                        padding: 0 0.5rem;
                    }
                    .pagination {
                        font-size: 0.9rem;
                    }
                `}</style>
            </Layout>
        )
    }
}
