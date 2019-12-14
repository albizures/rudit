import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приневоливать: PerfectVerb = {
  name: Word('приневоливать', 6),
  singular1stPerson: Word('приневоливаю', 6),
  singular2ndPerson: Word('приневоливаешь', 6),
  singular3rdPerson: Word('приневоливает', 6),
  plural1stPerson: Word('приневоливаем', 6),
  plural2ndPerson: Word('приневоливаете', 6),
  plural3rdPerson: Word('приневоливают', 6),
  masculinePast: Word('приневоливал', 6),
  femininePast: Word('приневоливала', 6),
  neuterPast: Word('приневоливало', 6),
  pluralPast: Word('приневоливали', 6),
  imperativeInformal: Word('приневоливай', 6),
  imperativeFormal: Word('приневоливайте', 6),
  imperfect: [],
};

perfectVerbs.set(приневоливать.name.text, приневоливать);

export { приневоливать };