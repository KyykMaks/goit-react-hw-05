import { Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import { Suspense, lazy } from 'react';


const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import ("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import ("./MovieDetails/MovieCast"));
const MovieReviews = lazy(() => import ("./MovieDetails/MovieReviews"));
const NotFound = lazy(() => import ("../pages/HomePage/HomePage"));
const Layout = lazy(() => import ("./Navigation/Navigation"));
const Loader = lazy(() => import ("./Loader"))


function App() {
  return (
    <Layout>
        <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
