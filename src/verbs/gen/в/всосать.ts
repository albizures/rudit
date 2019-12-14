import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всосать: PerfectVerb = {
  name: Word('всосать', 4),
  singular1stPerson: Word('всосу', 4),
  singular2ndPerson: Word('всосёшь', 4),
  singular3rdPerson: Word('всосёт', 4),
  plural1stPerson: Word('всосём', 4),
  plural2ndPerson: Word('всосёте', 4),
  plural3rdPerson: Word('всосут', 4),
  masculinePast: Word('всосал', 4),
  femininePast: Word('всосала', 4),
  neuterPast: Word('всосало', 4),
  pluralPast: Word('всосали', 4),
  imperativeInformal: Word('всоси', 4),
  imperativeFormal: Word('всосите', 4),
  imperfect: [],
};

perfectVerbs.set(всосать.name.text, всосать);

export { всосать };