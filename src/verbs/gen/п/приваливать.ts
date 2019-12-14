import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приваливать: PerfectVerb = {
  name: Word('приваливать', 4),
  singular1stPerson: Word('приваливаю', 4),
  singular2ndPerson: Word('приваливаешь', 4),
  singular3rdPerson: Word('приваливает', 4),
  plural1stPerson: Word('приваливаем', 4),
  plural2ndPerson: Word('приваливаете', 4),
  plural3rdPerson: Word('приваливают', 4),
  masculinePast: Word('приваливал', 4),
  femininePast: Word('приваливала', 4),
  neuterPast: Word('приваливало', 4),
  pluralPast: Word('приваливали', 4),
  imperativeInformal: Word('приваливай', 4),
  imperativeFormal: Word('приваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(приваливать.name.text, приваливать);

export { приваливать };