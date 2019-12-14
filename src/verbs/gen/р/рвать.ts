import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рвать: PerfectVerb = {
  name: Word('рвать', 2),
  singular1stPerson: Word('рву', 2),
  singular2ndPerson: Word('рвёшь', 2),
  singular3rdPerson: Word('рвёт', 2),
  plural1stPerson: Word('рвём', 2),
  plural2ndPerson: Word('рвёте', 2),
  plural3rdPerson: Word('рвут', 2),
  masculinePast: Word('рвал', 2),
  femininePast: Word('рвала', 4),
  neuterPast: Word('рвало', 4),
  pluralPast: Word('рвали', 2),
  imperativeInformal: Word('рви', 2),
  imperativeFormal: Word('рвите', 2),
  imperfect: [],
};

perfectVerbs.set(рвать.name.text, рвать);

export { рвать };