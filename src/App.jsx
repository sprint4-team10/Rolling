import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/List';
import Post from './pages/Post';
import Edit from './pages/Edit';
import Paper from './pages/Paper';
import Message from './pages/Message';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<Paper />} />
        <Route path="/post/:id/edit" element={<Edit />} />
        <Route path="/post/:id/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
