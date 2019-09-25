import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import moviesIcon from '~/assets/moviesicon.svg';
import tvshowsIcon from '~/assets/tvshowsicon.svg';
import charactersIcon from '~/assets/charactersicon.svg';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Logo, LogoutButton } from './styles';

export default function LeftSidebar() {
  const [selectedMenus, setSelectedMenus] = useState({
    movies: '',
    tvshows: '',
    characters: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    switch (window.location.pathname) {
      case '/movies':
      case '/movies/create':
        setSelectedMenus({ movies: 'active' });
        break;
      case '/tvshows':
      case '/tvshows/create':
        setSelectedMenus({ tvshows: 'active' });
        break;
      case '/characters':
      case '/characters/create':
        setSelectedMenus({ characters: 'active' });
        break;
      default:
    }
  }, [window.location.pathname]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <nav>
        <Logo
          src={logo}
          alt="MCUAPI Logo"
          title="Marvel Cinematic Universe API"
        />
        <Link className={`menu ${selectedMenus.movies}`} to="/movies">
          <img src={moviesIcon} alt="Movies Menu Icon" />
          Movies
        </Link>
        <Link className={`menu ${selectedMenus.tvshows}`} to="/tvshows">
          <img src={tvshowsIcon} alt="TVShows Menu Icon" />
          TV Shows
        </Link>
        <Link className={`menu ${selectedMenus.characters}`} to="/characters">
          <img src={charactersIcon} alt="Characters Menu Icon" />
          Characters
        </Link>
      </nav>
      <LogoutButton onClick={handleSignOut}>Logout</LogoutButton>
    </Container>
  );
}
