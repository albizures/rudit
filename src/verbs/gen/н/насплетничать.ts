import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насплетничать: PerfectVerb = {
  name: Word('насплетничать', 5),
  singular1stPerson: Word('насплетничаю', 5),
  singular2ndPerson: Word('насплетничаешь', 5),
  singular3rdPerson: Word('насплетничает', 5),
  plural1stPerson: Word('насплетничаем', 5),
  plural2ndPerson: Word('насплетничаете', 5),
  plural3rdPerson: Word('насплетничают', 5),
  masculinePast: Word('насплетничал', 5),
  femininePast: Word('насплетничала', 5),
  neuterPast: Word('насплетничало', 5),
  pluralPast: Word('насплетничали', 5),
  imperativeInformal: Word('насплетничай', 5),
  imperativeFormal: Word('насплетничайте', 5),
  imperfect: ['сплетничать'],
};

perfectVerbs.set(насплетничать.name.text, насплетничать);

export { насплетничать };