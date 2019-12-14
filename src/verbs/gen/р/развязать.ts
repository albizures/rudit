import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развязать: PerfectVerb = {
  name: Word('развязать', 6),
  singular1stPerson: Word('развяжу', 6),
  singular2ndPerson: Word('развяжешь', 4),
  singular3rdPerson: Word('развяжет', 4),
  plural1stPerson: Word('развяжем', 4),
  plural2ndPerson: Word('развяжете', 4),
  plural3rdPerson: Word('развяжут', 4),
  masculinePast: Word('развязал', 6),
  femininePast: Word('развязала', 6),
  neuterPast: Word('развязало', 6),
  pluralPast: Word('развязали', 6),
  imperativeInformal: Word('развяжи', 6),
  imperativeFormal: Word('развяжите', 6),
  imperfect: [],
};

perfectVerbs.set(развязать.name.text, развязать);

export { развязать };