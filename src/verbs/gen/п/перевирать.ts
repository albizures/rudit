import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевирать: PerfectVerb = {
  name: Word('перевирать', 7),
  singular1stPerson: Word('перевираю', 7),
  singular2ndPerson: Word('перевираешь', 7),
  singular3rdPerson: Word('перевирает', 7),
  plural1stPerson: Word('перевираем', 7),
  plural2ndPerson: Word('перевираете', 7),
  plural3rdPerson: Word('перевирают', 7),
  masculinePast: Word('перевирал', 7),
  femininePast: Word('перевирала', 7),
  neuterPast: Word('перевирало', 7),
  pluralPast: Word('перевирали', 7),
  imperativeInformal: Word('перевирай', 7),
  imperativeFormal: Word('перевирайте', 7),
  imperfect: [],
};

perfectVerbs.set(перевирать.name.text, перевирать);

export { перевирать };