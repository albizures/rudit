import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересосать: PerfectVerb = {
  name: Word('пересосать', 7),
  singular1stPerson: Word('пересосу', 7),
  singular2ndPerson: Word('пересосёшь', 1),
  singular3rdPerson: Word('пересосёт', 1),
  plural1stPerson: Word('пересосём', 1),
  plural2ndPerson: Word('пересосёте', 1),
  plural3rdPerson: Word('пересосут', 7),
  masculinePast: Word('пересосал', 7),
  femininePast: Word('пересосала', 7),
  neuterPast: Word('пересосало', 7),
  pluralPast: Word('пересосали', 7),
  imperativeInformal: Word('пересоси', 7),
  imperativeFormal: Word('пересосите', 7),
  imperfect: [],
};

perfectVerbs.set(пересосать.name.text, пересосать);

export { пересосать };