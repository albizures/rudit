import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрятывать: PerfectVerb = {
  name: Word('запрятывать', 4),
  singular1stPerson: Word('запрятываю', 4),
  singular2ndPerson: Word('запрятываешь', 4),
  singular3rdPerson: Word('запрятывает', 4),
  plural1stPerson: Word('запрятываем', 4),
  plural2ndPerson: Word('запрятываете', 4),
  plural3rdPerson: Word('запрятывают', 4),
  masculinePast: Word('запрятывал', 4),
  femininePast: Word('запрятывала', 4),
  neuterPast: Word('запрятывало', 4),
  pluralPast: Word('запрятывали', 4),
  imperativeInformal: Word('запрятывай', 4),
  imperativeFormal: Word('запрятывайте', 4),
  imperfect: [],
};

perfectVerbs.set(запрятывать.name.text, запрятывать);

export { запрятывать };