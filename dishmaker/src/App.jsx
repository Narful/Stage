import {Route,Routes} from 'react-router-dom';
import Product from './pages/product';
import Home from './pages/home';
import Notfound from './pages/notfound';

const app = () => {
  return (
    <div>
          <Routes>
            <Route path='/' element={<Home></Home>}>

            </Route>
            <Route path='/products' element={<Product></Product>}>

            </Route>
            <Route path='*' element={<Notfound></Notfound>}>

            </Route>
          </Routes>
    </div>
      )
}

export default app
