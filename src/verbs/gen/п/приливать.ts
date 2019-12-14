import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приливать: PerfectVerb = {
  name: Word('приливать', 6),
  singular1stPerson: Word('приливаю', 6),
  singular2ndPerson: Word('приливаешь', 6),
  singular3rdPerson: Word('приливает', 6),
  plural1stPerson: Word('приливаем', 6),
  plural2ndPerson: Word('приливаете', 6),
  plural3rdPerson: Word('приливают', 6),
  masculinePast: Word('приливал', 6),
  femininePast: Word('приливала', 6),
  neuterPast: Word('приливало', 6),
  pluralPast: Word('приливали', 6),
  imperativeInformal: Word('приливай', 6),
  imperativeFormal: Word('приливайте', 6),
  imperfect: [],
};

perfectVerbs.set(приливать.name.text, приливать);

export { приливать };