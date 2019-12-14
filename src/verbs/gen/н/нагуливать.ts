import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагуливать: PerfectVerb = {
  name: Word('нагуливать', 3),
  singular1stPerson: Word('нагуливаю', 3),
  singular2ndPerson: Word('нагуливаешь', 3),
  singular3rdPerson: Word('нагуливает', 3),
  plural1stPerson: Word('нагуливаем', 3),
  plural2ndPerson: Word('нагуливаете', 3),
  plural3rdPerson: Word('нагуливают', 3),
  masculinePast: Word('нагуливал', 3),
  femininePast: Word('нагуливала', 3),
  neuterPast: Word('нагуливало', 3),
  pluralPast: Word('нагуливали', 3),
  imperativeInformal: Word('нагуливай', 3),
  imperativeFormal: Word('нагуливайте', 3),
  imperfect: [],
};

perfectVerbs.set(нагуливать.name.text, нагуливать);

export { нагуливать };