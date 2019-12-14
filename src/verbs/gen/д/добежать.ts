import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добежать: PerfectVerb = {
  name: Word('добежать', 5),
  singular1stPerson: Word('добегу', 5),
  singular2ndPerson: Word('добежишь', 5),
  singular3rdPerson: Word('добежит', 5),
  plural1stPerson: Word('добежим', 5),
  plural2ndPerson: Word('добежите', 5),
  plural3rdPerson: Word('добегут', 5),
  masculinePast: Word('добежал', 5),
  femininePast: Word('добежала', 5),
  neuterPast: Word('добежало', 5),
  pluralPast: Word('добежали', 5),
  imperativeInformal: Word('добеги', 5),
  imperativeFormal: Word('добегите', 5),
  imperfect: [],
};

perfectVerbs.set(добежать.name.text, добежать);

export { добежать };