import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завлекать: PerfectVerb = {
  name: Word('завлекать', 6),
  singular1stPerson: Word('завлекаю', 6),
  singular2ndPerson: Word('завлекаешь', 6),
  singular3rdPerson: Word('завлекает', 6),
  plural1stPerson: Word('завлекаем', 6),
  plural2ndPerson: Word('завлекаете', 6),
  plural3rdPerson: Word('завлекают', 6),
  masculinePast: Word('завлекал', 6),
  femininePast: Word('завлекала', 6),
  neuterPast: Word('завлекало', 6),
  pluralPast: Word('завлекали', 6),
  imperativeInformal: Word('завлекай', 6),
  imperativeFormal: Word('завлекайте', 6),
  imperfect: [],
};

perfectVerbs.set(завлекать.name.text, завлекать);

export { завлекать };