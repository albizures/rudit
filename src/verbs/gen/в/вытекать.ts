import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытекать: PerfectVerb = {
  name: Word('вытекать', 5),
  singular1stPerson: Word('вытекаю', 5),
  singular2ndPerson: Word('вытекаешь', 5),
  singular3rdPerson: Word('вытекает', 5),
  plural1stPerson: Word('вытекаем', 5),
  plural2ndPerson: Word('вытекаете', 5),
  plural3rdPerson: Word('вытекают', 5),
  masculinePast: Word('вытекал', 5),
  femininePast: Word('вытекала', 5),
  neuterPast: Word('вытекало', 5),
  pluralPast: Word('вытекали', 5),
  imperativeInformal: Word('вытекай', 5),
  imperativeFormal: Word('вытекайте', 5),
  imperfect: [],
};

perfectVerbs.set(вытекать.name.text, вытекать);

export { вытекать };