import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грызть: PerfectVerb = {
  name: Word('грызть', 2),
  singular1stPerson: Word('грызу', 4),
  singular2ndPerson: Word('грызёшь', 4),
  singular3rdPerson: Word('грызёт', 4),
  plural1stPerson: Word('грызём', 4),
  plural2ndPerson: Word('грызёте', 6),
  plural3rdPerson: Word('грызут', 4),
  masculinePast: Word('грыз', 2),
  femininePast: Word('грызла', 2),
  neuterPast: Word('грызло', 2),
  pluralPast: Word('грызли', 2),
  imperativeInformal: Word('грызи', 4),
  imperativeFormal: Word('грызите', 4),
  imperfect: ['прогрызть','погрызть','сгрызть'],
};

perfectVerbs.set(грызть.name.text, грызть);

export { грызть };