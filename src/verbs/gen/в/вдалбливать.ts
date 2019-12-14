import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдалбливать: PerfectVerb = {
  name: Word('вдалбливать', 2),
  singular1stPerson: Word('вдалбливаю', 2),
  singular2ndPerson: Word('вдалбливаешь', 2),
  singular3rdPerson: Word('вдалбливает', 2),
  plural1stPerson: Word('вдалбливаем', 2),
  plural2ndPerson: Word('вдалбливаете', 2),
  plural3rdPerson: Word('вдалбливают', 2),
  masculinePast: Word('вдалбливал', 2),
  femininePast: Word('вдалбливала', 2),
  neuterPast: Word('вдалбливало', 2),
  pluralPast: Word('вдалбливали', 2),
  imperativeInformal: Word('вдалбливай', 2),
  imperativeFormal: Word('вдалбливайте', 2),
  imperfect: [],
};

perfectVerbs.set(вдалбливать.name.text, вдалбливать);

export { вдалбливать };