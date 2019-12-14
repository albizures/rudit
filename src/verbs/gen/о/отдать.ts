import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдать: PerfectVerb = {
  name: Word('отдать', 3),
  singular1stPerson: Word('отдам', 3),
  singular2ndPerson: Word('отдашь', 3),
  singular3rdPerson: Word('отдаст', 3),
  plural1stPerson: Word('отдадим', 5),
  plural2ndPerson: Word('отдадите', 5),
  plural3rdPerson: Word('отдадут', 5),
  masculinePast: Word('отдал,о'тдал', 3),
  femininePast: Word('отдала', 5),
  neuterPast: Word('отдало,отдало'', 3),
  pluralPast: Word('отдали,о'тдали', 3),
  imperativeInformal: Word('отдай', 3),
  imperativeFormal: Word('отдайте', 3),
  imperfect: ['отдавать'],
};

perfectVerbs.set(отдать.name.text, отдать);

export { отдать };