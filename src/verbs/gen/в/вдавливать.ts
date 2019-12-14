import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдавливать: PerfectVerb = {
  name: Word('вдавливать', 2),
  singular1stPerson: Word('вдавливаю', 2),
  singular2ndPerson: Word('вдавливаешь', 2),
  singular3rdPerson: Word('вдавливает', 2),
  plural1stPerson: Word('вдавливаем', 2),
  plural2ndPerson: Word('вдавливаете', 2),
  plural3rdPerson: Word('вдавливают', 2),
  masculinePast: Word('вдавливал', 2),
  femininePast: Word('вдавливала', 2),
  neuterPast: Word('вдавливало', 2),
  pluralPast: Word('вдавливали', 2),
  imperativeInformal: Word('вдавливай', 2),
  imperativeFormal: Word('вдавливайте', 2),
  imperfect: [],
};

perfectVerbs.set(вдавливать.name.text, вдавливать);

export { вдавливать };