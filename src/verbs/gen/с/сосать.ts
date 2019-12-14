import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сосать: PerfectVerb = {
  name: Word('сосать', 3),
  singular1stPerson: Word('сосу', 3),
  singular2ndPerson: Word('сосёшь', 1),
  singular3rdPerson: Word('сосёт', 1),
  plural1stPerson: Word('сосём', 1),
  plural2ndPerson: Word('сосёте', 5),
  plural3rdPerson: Word('сосут', 3),
  masculinePast: Word('сосал', 3),
  femininePast: Word('сосала', 3),
  neuterPast: Word('сосало', 3),
  pluralPast: Word('сосали', 3),
  imperativeInformal: Word('соси', 3),
  imperativeFormal: Word('сосите', 3),
  imperfect: ['пососать','отсосать'],
};

perfectVerbs.set(сосать.name.text, сосать);

export { сосать };