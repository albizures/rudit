import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрызть: PerfectVerb = {
  name: Word('загрызть', 4),
  singular1stPerson: Word('загрызу', 6),
  singular2ndPerson: Word('загрызёшь', 6),
  singular3rdPerson: Word('загрызёт', 6),
  plural1stPerson: Word('загрызём', 6),
  plural2ndPerson: Word('загрызёте', 6),
  plural3rdPerson: Word('загрызут', 6),
  masculinePast: Word('загрыз', 4),
  femininePast: Word('загрызла', 4),
  neuterPast: Word('загрызло', 4),
  pluralPast: Word('загрызли', 4),
  imperativeInformal: Word('загрызи', 6),
  imperativeFormal: Word('загрызите', 6),
  imperfect: [],
};

perfectVerbs.set(загрызть.name.text, загрызть);

export { загрызть };