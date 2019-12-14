import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижать: PerfectVerb = {
  name: Word('прижать', 4),
  singular1stPerson: Word('прижму', 5),
  singular2ndPerson: Word('прижмёшь', 2),
  singular3rdPerson: Word('прижмёт', 2),
  plural1stPerson: Word('прижмём', 2),
  plural2ndPerson: Word('прижмёте', 7),
  plural3rdPerson: Word('прижмут', 5),
  masculinePast: Word('прижал', 4),
  femininePast: Word('прижала', 4),
  neuterPast: Word('прижало', 4),
  pluralPast: Word('прижали', 4),
  imperativeInformal: Word('прижми', 5),
  imperativeFormal: Word('прижмите', 5),
  imperfect: [],
};

perfectVerbs.set(прижать.name.text, прижать);

export { прижать };