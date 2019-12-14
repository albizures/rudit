import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надорвать: PerfectVerb = {
  name: Word('надорвать', 6),
  singular1stPerson: Word('надорву', 6),
  singular2ndPerson: Word('надорвёшь', 1),
  singular3rdPerson: Word('надорвёт', 1),
  plural1stPerson: Word('надорвём', 1),
  plural2ndPerson: Word('надорвёте', 1),
  plural3rdPerson: Word('надорвут', 6),
  masculinePast: Word('надорвал', 6),
  femininePast: Word('надорвала', 8),
  neuterPast: Word('надорвало', 6),
  pluralPast: Word('надорвали', 6),
  imperativeInformal: Word('надорви', 6),
  imperativeFormal: Word('надорвите', 6),
  imperfect: [],
};

perfectVerbs.set(надорвать.name.text, надорвать);

export { надорвать };