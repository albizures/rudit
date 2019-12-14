import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присосать: PerfectVerb = {
  name: Word('присосать', 6),
  singular1stPerson: Word('присосу', 6),
  singular2ndPerson: Word('присосёшь', 2),
  singular3rdPerson: Word('присосёт', 2),
  plural1stPerson: Word('присосём', 2),
  plural2ndPerson: Word('присосёте', 8),
  plural3rdPerson: Word('присосут', 6),
  masculinePast: Word('присосал', 6),
  femininePast: Word('присосала', 6),
  neuterPast: Word('присосало', 6),
  pluralPast: Word('присосали', 6),
  imperativeInformal: Word('присоси', 6),
  imperativeFormal: Word('присосите', 6),
  imperfect: [],
};

perfectVerbs.set(присосать.name.text, присосать);

export { присосать };