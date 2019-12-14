import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгрызть: PerfectVerb = {
  name: Word('изгрызть', 4),
  singular1stPerson: Word('изгрызу', 6),
  singular2ndPerson: Word('изгрызёшь', 0),
  singular3rdPerson: Word('изгрызёт', 0),
  plural1stPerson: Word('изгрызём', 0),
  plural2ndPerson: Word('изгрызёте', 8),
  plural3rdPerson: Word('изгрызут', 6),
  masculinePast: Word('изгрыз', 4),
  femininePast: Word('изгрызла', 4),
  neuterPast: Word('изгрызло', 4),
  pluralPast: Word('изгрызли', 4),
  imperativeInformal: Word('изгрызи', 6),
  imperativeFormal: Word('изгрызите', 6),
  imperfect: [],
};

perfectVerbs.set(изгрызть.name.text, изгрызть);

export { изгрызть };