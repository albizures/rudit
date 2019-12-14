import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поучать: PerfectVerb = {
  name: Word('поучать', 4),
  singular1stPerson: Word('поучаю', 4),
  singular2ndPerson: Word('поучаешь', 4),
  singular3rdPerson: Word('поучает', 4),
  plural1stPerson: Word('поучаем', 4),
  plural2ndPerson: Word('поучаете', 4),
  plural3rdPerson: Word('поучают', 4),
  masculinePast: Word('поучал', 4),
  femininePast: Word('поучала', 4),
  neuterPast: Word('поучало', 4),
  pluralPast: Word('поучали', 4),
  imperativeInformal: Word('поучай', 4),
  imperativeFormal: Word('поучайте', 4),
  imperfect: [],
};

perfectVerbs.set(поучать.name.text, поучать);

export { поучать };