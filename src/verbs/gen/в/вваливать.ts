import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вваливать: PerfectVerb = {
  name: Word('вваливать', 2),
  singular1stPerson: Word('вваливаю', 2),
  singular2ndPerson: Word('вваливаешь', 2),
  singular3rdPerson: Word('вваливает', 2),
  plural1stPerson: Word('вваливаем', 2),
  plural2ndPerson: Word('вваливаете', 2),
  plural3rdPerson: Word('вваливают', 2),
  masculinePast: Word('вваливал', 2),
  femininePast: Word('вваливала', 2),
  neuterPast: Word('вваливало', 2),
  pluralPast: Word('вваливали', 2),
  imperativeInformal: Word('вваливай', 2),
  imperativeFormal: Word('вваливайте', 2),
  imperfect: [],
};

perfectVerbs.set(вваливать.name.text, вваливать);

export { вваливать };