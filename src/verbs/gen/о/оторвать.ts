import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оторвать: PerfectVerb = {
  name: Word('оторвать', 5),
  singular1stPerson: Word('оторву', 5),
  singular2ndPerson: Word('оторвёшь', 5),
  singular3rdPerson: Word('оторвёт', 5),
  plural1stPerson: Word('оторвём', 5),
  plural2ndPerson: Word('оторвёте', 5),
  plural3rdPerson: Word('оторвут', 5),
  masculinePast: Word('оторвал', 5),
  femininePast: Word('оторвала', 7),
  neuterPast: Word('оторвало', 5),
  pluralPast: Word('оторвали', 5),
  imperativeInformal: Word('оторви', 5),
  imperativeFormal: Word('оторвите', 5),
  imperfect: ['отрывать'],
};

perfectVerbs.set(оторвать.name.text, оторвать);

export { оторвать };