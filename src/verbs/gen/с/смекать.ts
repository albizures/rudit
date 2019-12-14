import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смекать: PerfectVerb = {
  name: Word('смекать', 4),
  singular1stPerson: Word('смекаю', 4),
  singular2ndPerson: Word('смекаешь', 4),
  singular3rdPerson: Word('смекает', 4),
  plural1stPerson: Word('смекаем', 4),
  plural2ndPerson: Word('смекаете', 4),
  plural3rdPerson: Word('смекают', 4),
  masculinePast: Word('смекал', 4),
  femininePast: Word('смекала', 4),
  neuterPast: Word('смекало', 4),
  pluralPast: Word('смекали', 4),
  imperativeInformal: Word('смекай', 4),
  imperativeFormal: Word('смекайте', 4),
  imperfect: [],
};

perfectVerbs.set(смекать.name.text, смекать);

export { смекать };