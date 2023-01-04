import styled from '@emotion/styled'
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  margin: 0.5rem;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  } 
`;

export const Card = styled(Paper)`
  width: 13rem;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;

  transition: 0.5s ease-in-out all;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition: 0.5s ease-out;
    transition: 0.5s ease-out;
  }
  &:hover:before {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &.Normal {
    color: #a8a878;
    &:hover {
      background-color: #a8a878;
      color: #fff;
    }
  }

  &.Fire {
    color: #f08030;
    &:hover {
      background-color: #f08030;
      color: #fff;
    }
  }

  &.Water {
    color: #445e9c;
    &:hover {
      background-color: #6890f0;
      color: #fff;
    }
  }

  &.Electric {
    color: #f8d030;
    &:hover {
      background-color: #f8d030;
      color: #fff;
    }
  }

  &.Grass {
    color: #78c850;
    &:hover {
      background-color: #78c850;
      color: #fff;
    }
  }

  &.Ice {
    color: #98d8d8;
    &:hover {
      background-color: #98d8d8;
      color: #fff;
    }
  }

  &.Ground {
    color: #e0c068;
    &:hover {
      background-color: #e0c068;
      color: #fff;
    }
  }

  &.Flying {
    color: #a890f0;
    &:hover {
      background-color: #a890f0;
      color: #fff;
    }
  }

  &.Ghost {
    color: #705898;
    &:hover {
      background-color: #705898;
      color: #fff;
    }
  }

  &.Rock {
    color: #b8a038;
    &:hover {
      background-color: #b8a038;
      color: #fff;
    }
  }

  &.Fighting {
    color: #c03028;
    &:hover {
      background-color: #c03028;
      color: #fff;
    }
  }

  &.Poison {
    color: #a040a0;
    &:hover {
      background-color: #a040a0;
      color: #fff;
    }
  }

  &.Psychic {
    color: #f85888;
    &:hover {
      background-color: #f85888;
      color: #fff;
    }
  }

  &.Bug {
    color: #a8b820;
    &:hover {
      background-color: #a8b820;
      color: #fff;
    }
  }

  &.Dark {
    color: #49392f;
    &:hover {
      background-color: #705848;
      color: #fff;
    }
  }

  &.Steel {
    color: #b8b8d0;
    &:hover {
      background-color: #b8b8d0;
      color: #fff;
    }
  }

  &.Dragon {
    color: #7038f8;
    &:hover {
      background-color: #7038f8;
      color: #fff;
    }
  }

  &.Fairy {
    color: #fa58f4;
    &:hover {
      background-color: #f781d8;
      color: #fff;
    }
  }
`;

export const CardId = styled(Typography)`
  width: 3rem;
  color: #333;
  padding: 0.1rem;
  font-weight: 700;
  position: absolute;
  border-radius: 0 0 10px 0;
  top: 0;
  left: 0;

  &.Normal {
    background-color: #a8a878;
  }

  &.Fire {
    background-color: #f08030;
  }

  &.Water {
    background-color: #6890f0;
  }

  &.Electric {
    background-color: #f8d030;
  }

  &.Grass {
    background-color: #78c850;
  }

  &.Ice {
    background-color: #98d8d8;
  }

  &.Ground {
    background-color: #e0c068;
  }

  &.Flying {
    background-color: #a890f0;
  }

  &.Ghost {
    background-color: #705898;
  }

  &.Rock {
    background-color: #b8a038;
  }

  &.Fighting {
    background-color: #c03028;
  }

  &.Poison {
    background-color: #a040a0;
  }

  &.Psychic {
    background-color: #f85888;
  }

  &.Bug {
    background-color: #a8b820;
  }

  &.Dark {
    background-color: #705848;
  }

  &.Steel {
    background-color: #b8b8d0;
  }

  &.Dragon {
    background-color: #7038f8;
  }

  &.Fairy {
    background-color: #f781d8;
  }
`;

export const CardImg = styled.img`
  width: 100px;
  display: none;
  margin: auto;
`;

export const CardName = styled(Typography)`
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const CardDetails = styled(Typography)`
  font-size: 1.3rem;
`;