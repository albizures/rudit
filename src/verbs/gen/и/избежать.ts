import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избежать: PerfectVerb = {
  name: Word('избежать', 5),
  singular1stPerson: Word('избегу', 5),
  singular2ndPerson: Word('избежишь', 5),
  singular3rdPerson: Word('избежит', 5),
  plural1stPerson: Word('избежим', 5),
  plural2ndPerson: Word('избежите', 5),
  plural3rdPerson: Word('избегут', 5),
  masculinePast: Word('избежал', 5),
  femininePast: Word('избежала', 5),
  neuterPast: Word('избежало', 5),
  pluralPast: Word('избежали', 5),
  imperativeInformal: Word('избеги', 5),
  imperativeFormal: Word('избегите', 5),
  imperfect: ['избегать'],
};

perfectVerbs.set(избежать.name.text, избежать);

export { избежать };