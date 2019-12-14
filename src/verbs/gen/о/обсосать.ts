import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсосать: PerfectVerb = {
  name: Word('обсосать', 5),
  singular1stPerson: Word('обсосу', 5),
  singular2ndPerson: Word('обсосёшь', 0),
  singular3rdPerson: Word('обсосёт', 0),
  plural1stPerson: Word('обсосём', 0),
  plural2ndPerson: Word('обсосёте', 7),
  plural3rdPerson: Word('обсосут', 5),
  masculinePast: Word('обсосал', 5),
  femininePast: Word('обсосала', 5),
  neuterPast: Word('обсосало', 5),
  pluralPast: Word('обсосали', 5),
  imperativeInformal: Word('обсоси', 5),
  imperativeFormal: Word('обсосите', 5),
  imperfect: [],
};

perfectVerbs.set(обсосать.name.text, обсосать);

export { обсосать };