import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсосать: PerfectVerb = {
  name: Word('подсосать', 6),
  singular1stPerson: Word('подсосу', 6),
  singular2ndPerson: Word('подсосёшь', 1),
  singular3rdPerson: Word('подсосёт', 1),
  plural1stPerson: Word('подсосём', 1),
  plural2ndPerson: Word('подсосёте', 8),
  plural3rdPerson: Word('подсосут', 6),
  masculinePast: Word('подсосал', 6),
  femininePast: Word('подсосала', 6),
  neuterPast: Word('подсосало', 6),
  pluralPast: Word('подсосали', 6),
  imperativeInformal: Word('подсоси', 6),
  imperativeFormal: Word('подсосите', 6),
  imperfect: [],
};

perfectVerbs.set(подсосать.name.text, подсосать);

export { подсосать };