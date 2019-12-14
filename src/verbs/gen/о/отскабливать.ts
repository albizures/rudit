import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отскабливать: PerfectVerb = {
  name: Word('отскабливать', 4),
  singular1stPerson: Word('отскабливаю', 4),
  singular2ndPerson: Word('отскабливаешь', 4),
  singular3rdPerson: Word('отскабливает', 4),
  plural1stPerson: Word('отскабливаем', 4),
  plural2ndPerson: Word('отскабливаете', 4),
  plural3rdPerson: Word('отскабливают', 4),
  masculinePast: Word('отскабливал', 4),
  femininePast: Word('отскабливала', 4),
  neuterPast: Word('отскабливало', 4),
  pluralPast: Word('отскабливали', 4),
  imperativeInformal: Word('отскабливай', 4),
  imperativeFormal: Word('отскабливайте', 4),
  imperfect: [],
};

perfectVerbs.set(отскабливать.name.text, отскабливать);

export { отскабливать };