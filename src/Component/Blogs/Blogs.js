import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='blogs'>
                <h1>What is contex api?</h1>
                <p>The React Context API is a way for a React app to     effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease</p>
            </div>
            <div className='blogs'>
                <h1>what is symantic tag?</h1>
                <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as b and i are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the markup.</p>
            </div>
        </div>
    );
};

export default Blogs;