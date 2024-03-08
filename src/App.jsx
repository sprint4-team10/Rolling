import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/List';
import Paper from './pages/Paper';
import Message from './pages/Message';
import NavLayout from './layout/NavLayout';
import Post from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Rolling</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Paper />} />
          <Route path="/post/:id/edit" element={<Paper />} />
          <Route path="/post/:id/message" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
