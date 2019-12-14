import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцинковать: PerfectVerb = {
  name: Word('оцинковать', 7),
  singular1stPerson: Word('оцинкую', 5),
  singular2ndPerson: Word('оцинкуешь', 5),
  singular3rdPerson: Word('оцинкует', 5),
  plural1stPerson: Word('оцинкуем', 5),
  plural2ndPerson: Word('оцинкуете', 5),
  plural3rdPerson: Word('оцинкуют', 5),
  masculinePast: Word('оцинковал', 7),
  femininePast: Word('оцинковала', 7),
  neuterPast: Word('оцинковало', 7),
  pluralPast: Word('оцинковали', 7),
  imperativeInformal: Word('оцинкуй', 5),
  imperativeFormal: Word('оцинкуйте', 5),
  imperfect: [],
};

perfectVerbs.set(оцинковать.name.text, оцинковать);

export { оцинковать };