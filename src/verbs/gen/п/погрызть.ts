import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрызть: PerfectVerb = {
  name: Word('погрызть', 4),
  singular1stPerson: Word('погрызу', 6),
  singular2ndPerson: Word('погрызёшь', 1),
  singular3rdPerson: Word('погрызёт', 1),
  plural1stPerson: Word('погрызём', 1),
  plural2ndPerson: Word('погрызёте', 8),
  plural3rdPerson: Word('погрызут', 6),
  masculinePast: Word('погрыз', 4),
  femininePast: Word('погрызла', 4),
  neuterPast: Word('погрызло', 4),
  pluralPast: Word('погрызли', 4),
  imperativeInformal: Word('погрызи', 6),
  imperativeFormal: Word('погрызите', 6),
  imperfect: [],
};

perfectVerbs.set(погрызть.name.text, погрызть);

export { погрызть };