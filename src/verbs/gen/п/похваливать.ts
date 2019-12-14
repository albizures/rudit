import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похваливать: PerfectVerb = {
  name: Word('похваливать', 4),
  singular1stPerson: Word('похваливаю', 4),
  singular2ndPerson: Word('похваливаешь', 4),
  singular3rdPerson: Word('похваливает', 4),
  plural1stPerson: Word('похваливаем', 4),
  plural2ndPerson: Word('похваливаете', 4),
  plural3rdPerson: Word('похваливают', 4),
  masculinePast: Word('похваливал', 4),
  femininePast: Word('похваливала', 4),
  neuterPast: Word('похваливало', 4),
  pluralPast: Word('похваливали', 4),
  imperativeInformal: Word('похваливай', 4),
  imperativeFormal: Word('похваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(похваливать.name.text, похваливать);

export { похваливать };