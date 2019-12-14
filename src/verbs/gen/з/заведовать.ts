import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заведовать: PerfectVerb = {
  name: Word('заведовать', 3),
  singular1stPerson: Word('заведую', 3),
  singular2ndPerson: Word('заведуешь', 3),
  singular3rdPerson: Word('заведует', 3),
  plural1stPerson: Word('заведуем', 3),
  plural2ndPerson: Word('заведуете', 3),
  plural3rdPerson: Word('заведуют', 3),
  masculinePast: Word('заведовал', 3),
  femininePast: Word('заведовала', 3),
  neuterPast: Word('заведовало', 3),
  pluralPast: Word('заведовали', 3),
  imperativeInformal: Word('заведуй', 3),
  imperativeFormal: Word('заведуйте', 3),
  imperfect: [],
};

perfectVerbs.set(заведовать.name.text, заведовать);

export { заведовать };