import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгрызть: PerfectVerb = {
  name: Word('обгрызть', 4),
  singular1stPerson: Word('обгрызу', 6),
  singular2ndPerson: Word('обгрызёшь', 0),
  singular3rdPerson: Word('обгрызёт', 0),
  plural1stPerson: Word('обгрызём', 0),
  plural2ndPerson: Word('обгрызёте', 8),
  plural3rdPerson: Word('обгрызут', 6),
  masculinePast: Word('обгрыз', 4),
  femininePast: Word('обгрызла', 4),
  neuterPast: Word('обгрызло', 4),
  pluralPast: Word('обгрызли', 4),
  imperativeInformal: Word('обгрызи', 6),
  imperativeFormal: Word('обгрызите', 6),
  imperfect: [],
};

perfectVerbs.set(обгрызть.name.text, обгрызть);

export { обгрызть };