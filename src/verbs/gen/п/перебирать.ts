import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебирать: PerfectVerb = {
  name: Word('перебирать', 7),
  singular1stPerson: Word('перебираю', 7),
  singular2ndPerson: Word('перебираешь', 7),
  singular3rdPerson: Word('перебирает', 7),
  plural1stPerson: Word('перебираем', 7),
  plural2ndPerson: Word('перебираете', 7),
  plural3rdPerson: Word('перебирают', 7),
  masculinePast: Word('перебирал', 7),
  femininePast: Word('перебирала', 7),
  neuterPast: Word('перебирало', 7),
  pluralPast: Word('перебирали', 7),
  imperativeInformal: Word('перебирай', 7),
  imperativeFormal: Word('перебирайте', 7),
  imperfect: [],
};

perfectVerbs.set(перебирать.name.text, перебирать);

export { перебирать };