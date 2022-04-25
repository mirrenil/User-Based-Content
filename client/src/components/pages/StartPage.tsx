import { useState } from 'react';
import Form from '../Form';
import NewPost from '../NewPost';
import {PostComponent} from '../PostComponent';

const StartPage = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <PostComponent />
      <button onClick={() => setIsOpen(true)}>+</button>
      <NewPost open={isOpen} onClose={() => setIsOpen(false)} >
        </NewPost>
        <Form />
    </div>
    
  ) 

};

export default StartPage;