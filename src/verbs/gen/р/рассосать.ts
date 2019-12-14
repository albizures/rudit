import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассосать: PerfectVerb = {
  name: Word('рассосать', 6),
  singular1stPerson: Word('рассосу', 6),
  singular2ndPerson: Word('рассосёшь', 6),
  singular3rdPerson: Word('рассосёт', 6),
  plural1stPerson: Word('рассосём', 6),
  plural2ndPerson: Word('рассосёте', 6),
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