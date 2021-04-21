import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Sample Post TItle 1', body: 'blah bah blah....', author: 'Akhil', id: 1},
        { title: 'Sample Post Title 2', body: 'Hey there....', author: 'Akhil', id: 2},
        { title: 'Sample Post Title 3', body: 'la la la la la laa la ....', author: 'Akhil', id: 3}
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={'All Blogs !'}/>
        </div>
     );
}
 
export default Home;