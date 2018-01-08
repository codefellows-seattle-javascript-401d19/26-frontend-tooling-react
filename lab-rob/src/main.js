import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';

console.log(say({text: faker.lorem.words(5)}));