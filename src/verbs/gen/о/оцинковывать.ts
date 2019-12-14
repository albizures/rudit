import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцинковывать: PerfectVerb = {
  name: Word('оцинковывать', 5),
  singular1stPerson: Word('оцинковываю', 5),
  singular2ndPerson: Word('оцинковываешь', 5),
  singular3rdPerson: Word('оцинковывает', 5),
  plural1stPerson: Word('оцинковываем', 5),
  plural2ndPerson: Word('оцинковываете', 5),
  plural3rdPerson: Word('оцинковывают', 5),
  masculinePast: Word('оцинковывал', 5),
  femininePast: Word('оцинковывала', 5),
  neuterPast: Word('оцинковывало', 5),
  pluralPast: Word('оцинковывали', 5),
  imperativeInformal: Word('оцинковывай', 5),
  imperativeFormal: Word('оцинковывайте', 5),
  imperfect: [],
};

perfectVerbs.set(оцинковывать.name.text, оцинковывать);

export { оцинковывать };