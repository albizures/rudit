import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переждать: PerfectVerb = {
  name: Word('переждать', 6),
  singular1stPerson: Word('пережду', 6),
  singular2ndPerson: Word('переждёшь', 6),
  singular3rdPerson: Word('переждёт', 6),
  plural1stPerson: Word('переждём', 6),
  plural2ndPerson: Word('переждёте', 6),
  plural3rdPerson: Word('переждут', 6),
  masculinePast: Word('переждал', 6),
  femininePast: Word('переждала', 8),
  neuterPast: Word('переждало', 6),
  pluralPast: Word('переждали', 6),
  imperativeInformal: Word('пережди', 6),
  imperativeFormal: Word('переждите', 6),
  imperfect: [],
};

perfectVerbs.set(переждать.name.text, переждать);

export { переждать };