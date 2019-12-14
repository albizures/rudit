import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побаливать: PerfectVerb = {
  name: Word('побаливать', 3),
  singular1stPerson: Word('побаливаю', 3),
  singular2ndPerson: Word('побаливаешь', 3),
  singular3rdPerson: Word('побаливает', 3),
  plural1stPerson: Word('побаливаем', 3),
  plural2ndPerson: Word('побаливаете', 3),
  plural3rdPerson: Word('побаливают', 3),
  masculinePast: Word('побаливал', 3),
  femininePast: Word('побаливала', 3),
  neuterPast: Word('побаливало', 3),
  pluralPast: Word('побаливали', 3),
  imperativeInformal: Word('побаливай', 3),
  imperativeFormal: Word('побаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(побаливать.name.text, побаливать);

export { побаливать };