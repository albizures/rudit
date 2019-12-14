import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборвать: PerfectVerb = {
  name: Word('оборвать', 5),
  singular1stPerson: Word('оборву', 5),
  singular2ndPerson: Word('оборвёшь', 0),
  singular3rdPerson: Word('оборвёт', 0),
  plural1stPerson: Word('оборвём', 0),
  plural2ndPerson: Word('оборвёте', 7),
  plural3rdPerson: Word('оборвут', 5),
  masculinePast: Word('оборвал', 5),
  femininePast: Word('оборвала', 7),
  neuterPast: Word('оборвало', 5),
  pluralPast: Word('оборвали', 5),
  imperativeInformal: Word('оборви', 5),
  imperativeFormal: Word('оборвите', 5),
  imperfect: [],
};

perfectVerbs.set(оборвать.name.text, оборвать);

export { оборвать };