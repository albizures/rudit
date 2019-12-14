import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздыбливать: PerfectVerb = {
  name: Word('вздыбливать', 3),
  singular1stPerson: Word('вздыбливаю', 3),
  singular2ndPerson: Word('вздыбливаешь', 3),
  singular3rdPerson: Word('вздыбливает', 3),
  plural1stPerson: Word('вздыбливаем', 3),
  plural2ndPerson: Word('вздыбливаете', 3),
  plural3rdPerson: Word('вздыбливают', 3),
  masculinePast: Word('вздыбливал', 3),
  femininePast: Word('вздыбливала', 3),
  neuterPast: Word('вздыбливало', 3),
  pluralPast: Word('вздыбливали', 3),
  imperativeInformal: Word('вздыбливай', 3),
  imperativeFormal: Word('вздыбливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вздыбливать.name.text, вздыбливать);

export { вздыбливать };