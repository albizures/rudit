import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсосать: PerfectVerb = {
  name: Word('отсосать', 5),
  singular1stPerson: Word('отсосу', 5),
  singular2ndPerson: Word('отсосёшь', 5),
  singular3rdPerson: Word('отсосёт', 5),
  plural1stPerson: Word('отсосём', 5),
  plural2ndPerson: Word('отсосёте', 5),
  plural3rdPerson: Word('отсосут', 5),
  masculinePast: Word('отсосал', 5),
  femininePast: Word('отсосала', 5),
  neuterPast: Word('отсосало', 5),
  pluralPast: Word('отсосали', 5),
  imperativeInformal: Word('отсоси', 5),
  imperativeFormal: Word('отсосите', 5),
  imperfect: ['отсасывать'],
};

perfectVerbs.set(отсосать.name.text, отсосать);

export { отсосать };