import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засосать: PerfectVerb = {
  name: Word('засосать', 5),
  singular1stPerson: Word('засосу', 5),
  singular2ndPerson: Word('засосёшь', 5),
  singular3rdPerson: Word('засосёт', 5),
  plural1stPerson: Word('засосём', 5),
  plural2ndPerson: Word('засосёте', 5),
  plural3rdPerson: Word('засосут', 5),
  masculinePast: Word('засосал', 5),
  femininePast: Word('засосала', 5),
  neuterPast: Word('засосало', 5),
  pluralPast: Word('засосали', 5),
  imperativeInformal: Word('засоси', 5),
  imperativeFormal: Word('засосите', 5),
  imperfect: [],
};

perfectVerbs.set(засосать.name.text, засосать);

export { засосать };