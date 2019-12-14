import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссосать: PerfectVerb = {
  name: Word('ссосать', 4),
  singular1stPerson: Word('ссосу', 4),
  singular2ndPerson: Word('ссосёшь', 4),
  singular3rdPerson: Word('ссосёт', 4),
  plural1stPerson: Word('ссосём', 4),
  plural2ndPerson: Word('ссосёте', 4),
  plural3rdPerson: Word('ссосут', 4),
  masculinePast: Word('ссосал', 4),
  femininePast: Word('ссосала', 4),
  neuterPast: Word('ссосало', 4),
  pluralPast: Word('ссосали', 4),
  imperativeInformal: Word('ссоси', 4),
  imperativeFormal: Word('ссосите', 4),
  imperfect: [],
};

perfectVerbs.set(ссосать.name.text, ссосать);

export { ссосать };