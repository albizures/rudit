import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продавать: PerfectVerb = {
  name: Word('продавать', 6),
  singular1stPerson: Word('продаю', 5),
  singular2ndPerson: Word('продаёшь', 4),
  singular3rdPerson: Word('продаёт', 4),
  plural1stPerson: Word('продаём', 4),
  plural2ndPerson: Word('продаёте', 4),
  plural3rdPerson: Word('продают', 5),
  masculinePast: Word('продавал', 6),
  femininePast: Word('продавала', 6),
  neuterPast: Word('продавало', 6),
  pluralPast: Word('продавали', 6),
  imperativeInformal: Word('продавай', 6),
  imperativeFormal: Word('продавайте', 6),
  imperfect: ['продать'],
};

perfectVerbs.set(продавать.name.text, продавать);

export { продавать };