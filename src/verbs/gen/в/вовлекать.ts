import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вовлекать: PerfectVerb = {
  name: Word('вовлекать', 6),
  singular1stPerson: Word('вовлекаю', 6),
  singular2ndPerson: Word('вовлекаешь', 6),
  singular3rdPerson: Word('вовлекает', 6),
  plural1stPerson: Word('вовлекаем', 6),
  plural2ndPerson: Word('вовлекаете', 6),
  plural3rdPerson: Word('вовлекают', 6),
  masculinePast: Word('вовлекал', 6),
  femininePast: Word('вовлекала', 6),
  neuterPast: Word('вовлекало', 6),
  pluralPast: Word('вовлекали', 6),
  imperativeInformal: Word('вовлекай', 6),
  imperativeFormal: Word('вовлекайте', 6),
  imperfect: [],
};

perfectVerbs.set(вовлекать.name.text, вовлекать);

export { вовлекать };