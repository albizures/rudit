import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взваливать: PerfectVerb = {
  name: Word('взваливать', 3),
  singular1stPerson: Word('взваливаю', 3),
  singular2ndPerson: Word('взваливаешь', 3),
  singular3rdPerson: Word('взваливает', 3),
  plural1stPerson: Word('взваливаем', 3),
  plural2ndPerson: Word('взваливаете', 3),
  plural3rdPerson: Word('взваливают', 3),
  masculinePast: Word('взваливал', 3),
  femininePast: Word('взваливала', 3),
  neuterPast: Word('взваливало', 3),
  pluralPast: Word('взваливали', 3),
  imperativeInformal: Word('взваливай', 3),
  imperativeFormal: Word('взваливайте', 3),
  imperfect: [],
};

perfectVerbs.set(взваливать.name.text, взваливать);

export { взваливать };