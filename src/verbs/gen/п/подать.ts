import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подать: PerfectVerb = {
  name: Word('подать', 3),
  singular1stPerson: Word('подам', 3),
  singular2ndPerson: Word('подашь', 3),
  singular3rdPerson: Word('подаст', 3),
  plural1stPerson: Word('подадим', 5),
  plural2ndPerson: Word('подадите', 5),
  plural3rdPerson: Word('подадут', 5),
  masculinePast: Word('подал,по'дал', 3),
  femininePast: Word('подала', 5),
  neuterPast: Word('подало,подало'', 3),
  pluralPast: Word('подали,по'дали', 3),
  imperativeInformal: Word('подай', 3),
  imperativeFormal: Word('подайте', 3),
  imperfect: ['подавать'],
};

perfectVerbs.set(подать.name.text, подать);

export { подать };