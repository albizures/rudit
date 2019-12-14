import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрасти: PerfectVerb = {
  name: Word('подрасти', 7),
  singular1stPerson: Word('подрасту', 7),
  singular2ndPerson: Word('подрастёшь', 7),
  singular3rdPerson: Word('подрастёт', 7),
  plural1stPerson: Word('подрастём', 7),
  plural2ndPerson: Word('подрастёте', 7),
  plural3rdPerson: Word('подрастут', 7),
  masculinePast: Word('подрос', 4),
  femininePast: Word('подросла', 7),
  neuterPast: Word('подросло', 7),
  pluralPast: Word('подросли', 7),
  imperativeInformal: Word('подрасти', 7),
  imperativeFormal: Word('подрастите', 7),
  imperfect: [],
};

perfectVerbs.set(подрасти.name.text, подрасти);

export { подрасти };