import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насмешничать: PerfectVerb = {
  name: Word('насмешничать', 4),
  singular1stPerson: Word('насмешничаю', 4),
  singular2ndPerson: Word('насмешничаешь', 4),
  singular3rdPerson: Word('насмешничает', 4),
  plural1stPerson: Word('насмешничаем', 4),
  plural2ndPerson: Word('насмешничаете', 4),
  plural3rdPerson: Word('насмешничают', 4),
  masculinePast: Word('насмешничал', 4),
  femininePast: Word('насмешничала', 4),
  neuterPast: Word('насмешничало', 4),
  pluralPast: Word('насмешничали', 4),
  imperativeInformal: Word('насмешничай', 4),
  imperativeFormal: Word('насмешничайте', 4),
  imperfect: [],
};

perfectVerbs.set(насмешничать.name.text, насмешничать);

export { насмешничать };