import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкрапливать: PerfectVerb = {
  name: Word('вкрапливать', 3),
  singular1stPerson: Word('вкрапливаю', 3),
  singular2ndPerson: Word('вкрапливаешь', 3),
  singular3rdPerson: Word('вкрапливает', 3),
  plural1stPerson: Word('вкрапливаем', 3),
  plural2ndPerson: Word('вкрапливаете', 3),
  plural3rdPerson: Word('вкрапливают', 3),
  masculinePast: Word('вкрапливал', 3),
  femininePast: Word('вкрапливала', 3),
  neuterPast: Word('вкрапливало', 3),
  pluralPast: Word('вкрапливали', 3),
  imperativeInformal: Word('вкрапливай', 3),
  imperativeFormal: Word('вкрапливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вкрапливать.name.text, вкрапливать);

export { вкрапливать };