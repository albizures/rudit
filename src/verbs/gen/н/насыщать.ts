import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насыщать: PerfectVerb = {
  name: Word('насыщать', 5),
  singular1stPerson: Word('насыщаю', 5),
  singular2ndPerson: Word('насыщаешь', 5),
  singular3rdPerson: Word('насыщает', 5),
  plural1stPerson: Word('насыщаем', 5),
  plural2ndPerson: Word('насыщаете', 5),
  plural3rdPerson: Word('насыщают', 5),
  masculinePast: Word('насыщал', 5),
  femininePast: Word('насыщала', 5),
  neuterPast: Word('насыщало', 5),
  pluralPast: Word('насыщали', 5),
  imperativeInformal: Word('насыщай', 5),
  imperativeFormal: Word('насыщайте', 5),
  imperfect: [],
};

perfectVerbs.set(насыщать.name.text, насыщать);

export { насыщать };