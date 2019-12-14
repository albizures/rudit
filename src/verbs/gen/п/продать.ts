import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продать: PerfectVerb = {
  name: Word('продать', 4),
  singular1stPerson: Word('продам', 4),
  singular2ndPerson: Word('продашь', 4),
  singular3rdPerson: Word('продаст', 4),
  plural1stPerson: Word('продадим', 6),
  plural2ndPerson: Word('продадите', 6),
  plural3rdPerson: Word('продадут', 6),
  masculinePast: Word('продал,про'дал', 4),
  femininePast: Word('продала', 6),
  neuterPast: Word('продало,продало'', 4),
  pluralPast: Word('продали,про'дали', 4),
  imperativeInformal: Word('продай', 4),
  imperativeFormal: Word('продайте', 4),
  imperfect: ['продавать'],
};

perfectVerbs.set(продать.name.text, продать);

export { продать };