import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выруливать: PerfectVerb = {
  name: Word('выруливать', 3),
  singular1stPerson: Word('выруливаю', 3),
  singular2ndPerson: Word('выруливаешь', 3),
  singular3rdPerson: Word('выруливает', 3),
  plural1stPerson: Word('выруливаем', 3),
  plural2ndPerson: Word('выруливаете', 3),
  plural3rdPerson: Word('выруливают', 3),
  masculinePast: Word('выруливал', 3),
  femininePast: Word('выруливала', 3),
  neuterPast: Word('выруливало', 3),
  pluralPast: Word('выруливали', 3),
  imperativeInformal: Word('выруливай', 3),
  imperativeFormal: Word('выруливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выруливать.name.text, выруливать);

export { выруливать };