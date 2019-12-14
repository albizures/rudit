import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насажать: PerfectVerb = {
  name: Word('насажать', 5),
  singular1stPerson: Word('насажаю', 5),
  singular2ndPerson: Word('насажаешь', 5),
  singular3rdPerson: Word('насажает', 5),
  plural1stPerson: Word('насажаем', 5),
  plural2ndPerson: Word('насажаете', 5),
  plural3rdPerson: Word('насажают', 5),
  masculinePast: Word('насажал', 5),
  femininePast: Word('насажала', 5),
  neuterPast: Word('насажало', 5),
  pluralPast: Word('насажали', 5),
  imperativeInformal: Word('насажай', 5),
  imperativeFormal: Word('насажайте', 5),
  imperfect: [],
};

perfectVerbs.set(насажать.name.text, насажать);

export { насажать };