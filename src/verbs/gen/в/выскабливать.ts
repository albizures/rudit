import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выскабливать: PerfectVerb = {
  name: Word('выскабливать', 4),
  singular1stPerson: Word('выскабливаю', 4),
  singular2ndPerson: Word('выскабливаешь', 4),
  singular3rdPerson: Word('выскабливает', 4),
  plural1stPerson: Word('выскабливаем', 4),
  plural2ndPerson: Word('выскабливаете', 4),
  plural3rdPerson: Word('выскабливают', 4),
  masculinePast: Word('выскабливал', 4),
  femininePast: Word('выскабливала', 4),
  neuterPast: Word('выскабливало', 4),
  pluralPast: Word('выскабливали', 4),
  imperativeInformal: Word('выскабливай', 4),
  imperativeFormal: Word('выскабливайте', 4),
  imperfect: [],
};

perfectVerbs.set(выскабливать.name.text, выскабливать);

export { выскабливать };