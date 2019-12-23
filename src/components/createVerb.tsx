import React from 'react';
import { NextPage } from 'next';
import { to } from 'await-to-js';
import axios from 'axios';
import { PerfectVerb, ImperfectVerb } from '../utils/Verb';
import Word from './Word';

const createVerb = <T extends PerfectVerb | ImperfectVerb>(type: 'perfect' | 'imperfect') => {
  interface PropTypes {
    verb: T;
  }

  const Verb: NextPage<PropTypes> = (props) => {
    const { verb } = props;

    return (
      <div>
        <h3>Past Tense</h3>
        <table>
          <tbody>
            <tr>
              <th>он</th>
              <td>
                <Word word={verb.masculinePast} />
              </td>
            </tr>
            <tr>
              <th>она</th>
              <td>
                <Word word={verb.femininePast} />
              </td>
            </tr>
            <tr>
              <th>оно</th>
              <td>
                <Word word={verb.neuterPast} />
              </td>
            </tr>
            <tr>
              <th>они</th>
              <td>
                <Word word={verb.pluralPast} />
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Future Tense</h3>
        <table>
          <tbody>
            <tr>
              <th>я</th>
              <td>
                <Word word={verb.singular1stPerson} />
              </td>
            </tr>
            <tr>
              <th>ты</th>
              <td>
                <Word word={verb.singular2ndPerson} />
              </td>
            </tr>
            <tr>
              <th>он</th>
              <td>
                <Word word={verb.singular3rdPerson} />
              </td>
            </tr>
            <tr>
              <th>мы</th>
              <td>
                <Word word={verb.plural1stPerson} />
              </td>
            </tr>
            <tr>
              <th>вы</th>
              <td>
                <Word word={verb.plural2ndPerson} />
              </td>
            </tr>
            <tr>
              <th>они</th>
              <td>
                <Word word={verb.plural3rdPerson} />
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Imperative</h3>
        <table>
          <tbody>
            <tr>
              <th>ты</th>
              <td>
                <Word word={verb.imperativeInformal} />
              </td>
            </tr>
            <tr>
              <th>вы</th>
              <td>
                <Word word={verb.imperativeFormal} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  Verb.getInitialProps = async ({ query }) => {
    const name = encodeURIComponent(query.name as string);
    const [error, response] = await to(
      axios.get(`http://localhost:3000/api/verbs/${type}/${name}`),
    );

    if (error) {
      throw error;
    }

    if (!response || !response.data) {
      throw new Error(`${name} not found`);
    }

    return {
      verb: response.data as T,
    };
  };

  return Verb;
};

export default createVerb;
