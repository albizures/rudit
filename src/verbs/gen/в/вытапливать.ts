import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытапливать: PerfectVerb = {
  name: Word('вытапливать', 3),
  singular1stPerson: Word('вытапливаю', 3),
  singular2ndPerson: Word('вытапливаешь', 3),
  singular3rdPerson: Word('вытапливает', 3),
  plural1stPerson: Word('вытапливаем', 3),
  plural2ndPerson: Word('вытапливаете', 3),
  plural3rdPerson: Word('вытапливают', 3),
  masculinePast: Word('вытапливал', 3),
  femininePast: Word('вытапливала', 3),
  neuterPast: Word('вытапливало', 3),
  pluralPast: Word('вытапливали', 3),
  imperativeInformal: Word('вытапливай', 3),
  imperativeFormal: Word('вытапливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вытапливать.name.text, вытапливать);

export { вытапливать };