import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгрызть: PerfectVerb = {
  name: Word('отгрызть', 4),
  singular1stPerson: Word('отгрызу', 6),
  singular2ndPerson: Word('отгрызёшь', 0),
  singular3rdPerson: Word('отгрызёт', 0),
  plural1stPerson: Word('отгрызём', 0),
  plural2ndPerson: Word('отгрызёте', 8),
  plural3rdPerson: Word('отгрызут', 6),
  masculinePast: Word('отгрыз', 4),
  femininePast: Word('отгрызла', 4),
  neuterPast: Word('отгрызло', 4),
  pluralPast: Word('отгрызли', 4),
  imperativeInformal: Word('отгрызи', 6),
  imperativeFormal: Word('отгрызите', 6),
  imperfect: [],
};

perfectVerbs.set(отгрызть.name.text, отгрызть);

export { отгрызть };