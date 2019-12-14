import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вываливать: PerfectVerb = {
  name: Word('вываливать', 3),
  singular1stPerson: Word('вываливаю', 3),
  singular2ndPerson: Word('вываливаешь', 3),
  singular3rdPerson: Word('вываливает', 3),
  plural1stPerson: Word('вываливаем', 3),
  plural2ndPerson: Word('вываливаете', 3),
  plural3rdPerson: Word('вываливают', 3),
  masculinePast: Word('вываливал', 3),
  femininePast: Word('вываливала', 3),
  neuterPast: Word('вываливало', 3),
  pluralPast: Word('вываливали', 3),
  imperativeInformal: Word('вываливай', 3),
  imperativeFormal: Word('вываливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вываливать.name.text, вываливать);

export { вываливать };