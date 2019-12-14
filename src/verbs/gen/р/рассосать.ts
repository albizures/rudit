import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассосать: PerfectVerb = {
  name: Word('рассосать', 6),
  singular1stPerson: Word('рассосу', 6),
  singular2ndPerson: Word('рассосёшь', 1),
  singular3rdPerson: Word('рассосёт', 1),
  plural1stPerson: Word('рассосём', 1),
  plural2ndPerson: Word('рассосёте', 1),
  plural3rdPerson: Word('рассосут', 6),
  masculinePast: Word('рассосал', 6),
  femininePast: Word('рассосала', 6),
  neuterPast: Word('рассосало', 6),
  pluralPast: Word('рассосали', 6),
  imperativeInformal: Word('рассоси', 6),
  imperativeFormal: Word('рассосите', 6),
  imperfect: [],
};

perfectVerbs.set(рассосать.name.text, рассосать);

export { рассосать };