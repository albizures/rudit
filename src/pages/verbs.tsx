import React from 'react';
import verbList from '../verbs/array';
import pronounList from '../pronouns/array';
import * as pronouns from '../pronouns/pronouns';
import { getRandomElement } from '../utils/array';
import Word from '../components/Word';
import { verbConjugations } from '../utils/Verb';

const Index: React.FC = () => {
  return (
    <div>
      <ul>
        {verbList.map((verb, index) => {
          return (
            <li
              key={index}
              style={{
                marginTop: 20,
              }}
            >
              <ul>
                <Word word={verb.name} />
                <li>
                  <Word word={pronouns.singular1stPerson.nominative} />{' '}
                  <Word word={verb.singular1stPerson} />
                </li>
                <li>
                  <Word word={pronouns.singular2ndPerson.nominative} />{' '}
                  <Word word={verb.singular2ndPerson} />
                </li>
                <li>
                  <Word word={pronouns.singular3rdMasculinePerson.nominative} />/
                  <Word word={pronouns.singular3rdFemininePerson.nominative} />{' '}
                  <Word word={verb.singular3rdPerson} />
                </li>
                <li>
                  <Word word={pronouns.plural1stPerson.nominative} />{' '}
                  <Word word={verb.plural1stPerson} />
                </li>
                <li>
                  <Word word={pronouns.plural2ndPerson.nominative} />{' '}
                  <Word word={verb.plural2ndPerson} />
                </li>
                <li>
                  <Word word={pronouns.plural3rdPerson.nominative} />{' '}
                  <Word word={verb.plural3rdPerson} />
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
