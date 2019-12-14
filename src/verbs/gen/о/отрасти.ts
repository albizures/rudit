import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрасти: PerfectVerb = {
  name: Word('отрасти', 6),
  singular1stPerson: Word('отрасту', 6),
  singular2ndPerson: Word('отрастёшь', 6),
  singular3rdPerson: Word('отрастёт', 6),
  plural1stPerson: Word('отрастём', 6),
  plural2ndPerson: Word('отрастёте', 6),
  plural3rdPerson: Word('отрастут', 6),
  masculinePast: Word('отрос', 3),
  femininePast: Word('отросла', 6),
  neuterPast: Word('отросло', 6),
  pluralPast: Word('отросли', 6),
  imperativeInformal: Word('отрасти', 6),
  imperativeFormal: Word('отрастите', 6),
  imperfect: [],
};

perfectVerbs.set(отрасти.name.text, отрасти);

export { отрасти };