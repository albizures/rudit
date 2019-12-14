import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заштриховать: PerfectVerb = {
  name: Word('заштриховать', 9),
  singular1stPerson: Word('заштрихую', 7),
  singular2ndPerson: Word('заштрихуешь', 7),
  singular3rdPerson: Word('заштрихует', 7),
  plural1stPerson: Word('заштрихуем', 7),
  plural2ndPerson: Word('заштрихуете', 7),
  plural3rdPerson: Word('заштрихуют', 7),
  masculinePast: Word('заштриховал', 9),
  femininePast: Word('заштриховала', 9),
  neuterPast: Word('заштриховало', 9),
  pluralPast: Word('заштриховали', 9),
  imperativeInformal: Word('заштрихуй', 7),
  imperativeFormal: Word('заштрихуйте', 7),
  imperfect: [],
};

perfectVerbs.set(заштриховать.name.text, заштриховать);

export { заштриховать };