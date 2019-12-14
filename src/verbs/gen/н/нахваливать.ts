import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахваливать: PerfectVerb = {
  name: Word('нахваливать', 4),
  singular1stPerson: Word('нахваливаю', 4),
  singular2ndPerson: Word('нахваливаешь', 4),
  singular3rdPerson: Word('нахваливает', 4),
  plural1stPerson: Word('нахваливаем', 4),
  plural2ndPerson: Word('нахваливаете', 4),
  plural3rdPerson: Word('нахваливают', 4),
  masculinePast: Word('нахваливал', 4),
  femininePast: Word('нахваливала', 4),
  neuterPast: Word('нахваливало', 4),
  pluralPast: Word('нахваливали', 4),
  imperativeInformal: Word('нахваливай', 4),
  imperativeFormal: Word('нахваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(нахваливать.name.text, нахваливать);

export { нахваливать };