import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрасти: PerfectVerb = {
  name: Word('обрасти', 6),
  singular1stPerson: Word('обрасту', 6),
  singular2ndPerson: Word('обрастёшь', 6),
  singular3rdPerson: Word('обрастёт', 6),
  plural1stPerson: Word('обрастём', 6),
  plural2ndPerson: Word('обрастёте', 6),
  plural3rdPerson: Word('обрастут', 6),
  masculinePast: Word('оброс', 3),
  femininePast: Word('обросла', 6),
  neuterPast: Word('обросло', 6),
  pluralPast: Word('обросли', 6),
  imperativeInformal: Word('обрасти', 6),
  imperativeFormal: Word('обрастите', 6),
  imperfect: [],
};

perfectVerbs.set(обрасти.name.text, обрасти);

export { обрасти };