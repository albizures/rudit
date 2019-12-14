import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кумекать: PerfectVerb = {
  name: Word('кумекать', 3),
  singular1stPerson: Word('кумекаю', 3),
  singular2ndPerson: Word('кумекаешь', 3),
  singular3rdPerson: Word('кумекает', 3),
  plural1stPerson: Word('кумекаем', 3),
  plural2ndPerson: Word('кумекаете', 3),
  plural3rdPerson: Word('кумекают', 3),
  masculinePast: Word('кумекал', 3),
  femininePast: Word('кумекала', 3),
  neuterPast: Word('кумекало', 3),
  pluralPast: Word('кумекали', 3),
  imperativeInformal: Word('кумекай', 3),
  imperativeFormal: Word('кумекайте', 3),
  imperfect: [],
};

perfectVerbs.set(кумекать.name.text, кумекать);

export { кумекать };