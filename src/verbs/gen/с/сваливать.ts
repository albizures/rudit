import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сваливать: PerfectVerb = {
  name: Word('сваливать', 2),
  singular1stPerson: Word('сваливаю', 2),
  singular2ndPerson: Word('сваливаешь', 2),
  singular3rdPerson: Word('сваливает', 2),
  plural1stPerson: Word('сваливаем', 2),
  plural2ndPerson: Word('сваливаете', 2),
  plural3rdPerson: Word('сваливают', 2),
  masculinePast: Word('сваливал', 2),
  femininePast: Word('сваливала', 2),
  neuterPast: Word('сваливало', 2),
  pluralPast: Word('сваливали', 2),
  imperativeInformal: Word('сваливай', 2),
  imperativeFormal: Word('сваливайте', 2),
  imperfect: [],
};

perfectVerbs.set(сваливать.name.text, сваливать);

export { сваливать };