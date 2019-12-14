import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылавливать: PerfectVerb = {
  name: Word('вылавливать', 3),
  singular1stPerson: Word('вылавливаю', 3),
  singular2ndPerson: Word('вылавливаешь', 3),
  singular3rdPerson: Word('вылавливает', 3),
  plural1stPerson: Word('вылавливаем', 3),
  plural2ndPerson: Word('вылавливаете', 3),
  plural3rdPerson: Word('вылавливают', 3),
  masculinePast: Word('вылавливал', 3),
  femininePast: Word('вылавливала', 3),
  neuterPast: Word('вылавливало', 3),
  pluralPast: Word('вылавливали', 3),
  imperativeInformal: Word('вылавливай', 3),
  imperativeFormal: Word('вылавливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вылавливать.name.text, вылавливать);

export { вылавливать };