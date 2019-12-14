import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уваливать: PerfectVerb = {
  name: Word('уваливать', 2),
  singular1stPerson: Word('уваливаю', 2),
  singular2ndPerson: Word('уваливаешь', 2),
  singular3rdPerson: Word('уваливает', 2),
  plural1stPerson: Word('уваливаем', 2),
  plural2ndPerson: Word('уваливаете', 2),
  plural3rdPerson: Word('уваливают', 2),
  masculinePast: Word('уваливал', 2),
  femininePast: Word('уваливала', 2),
  neuterPast: Word('уваливало', 2),
  pluralPast: Word('уваливали', 2),
  imperativeInformal: Word('уваливай', 2),
  imperativeFormal: Word('уваливайте', 2),
  imperfect: [],
};

perfectVerbs.set(уваливать.name.text, уваливать);

export { уваливать };