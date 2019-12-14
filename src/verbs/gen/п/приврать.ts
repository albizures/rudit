import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приврать: PerfectVerb = {
  name: Word('приврать', 5),
  singular1stPerson: Word('привру', 5),
  singular2ndPerson: Word('приврёшь', 2),
  singular3rdPerson: Word('приврёт', 2),
  plural1stPerson: Word('приврём', 2),
  plural2ndPerson: Word('приврёте', 7),
  plural3rdPerson: Word('приврут', 5),
  masculinePast: Word('приврал', 5),
  femininePast: Word('приврала', 7),
  neuterPast: Word('приврало', 5),
  pluralPast: Word('приврали', 5),
  imperativeInformal: Word('приври', 5),
  imperativeFormal: Word('приврите', 5),
  imperfect: [],
};

perfectVerbs.set(приврать.name.text, приврать);

export { приврать };