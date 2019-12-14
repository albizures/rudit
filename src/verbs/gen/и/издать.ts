import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издать: PerfectVerb = {
  name: Word('издать', 3),
  singular1stPerson: Word('издам', 3),
  singular2ndPerson: Word('издашь', 3),
  singular3rdPerson: Word('издаст', 3),
  plural1stPerson: Word('издадим', 5),
  plural2ndPerson: Word('издадите', 5),
  plural3rdPerson: Word('издадут', 5),
  masculinePast: Word('издал', 3),
  femininePast: Word('издала', 5),
  neuterPast: Word('издало,издало'', 3),
  pluralPast: Word('издали', 3),
  imperativeInformal: Word('издай', 3),
  imperativeFormal: Word('издайте', 3),
  imperfect: ['издавать'],
};

perfectVerbs.set(издать.name.text, издать);

export { издать };