import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порвать: PerfectVerb = {
  name: Word('порвать', 4),
  singular1stPerson: Word('порву', 4),
  singular2ndPerson: Word('порвёшь', 1),
  singular3rdPerson: Word('порвёт', 1),
  plural1stPerson: Word('порвём', 1),
  plural2ndPerson: Word('порвёте', 6),
  plural3rdPerson: Word('порвут', 4),
  masculinePast: Word('порвал', 4),
  femininePast: Word('порвала', 6),
  neuterPast: Word('порвало', 4),
  pluralPast: Word('порвали', 4),
  imperativeInformal: Word('порви', 4),
  imperativeFormal: Word('порвите', 4),
  imperfect: [],
};

perfectVerbs.set(порвать.name.text, порвать);

export { порвать };