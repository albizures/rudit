import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогрызть: PerfectVerb = {
  name: Word('прогрызть', 5),
  singular1stPerson: Word('прогрызу', 7),
  singular2ndPerson: Word('прогрызёшь', 2),
  singular3rdPerson: Word('прогрызёт', 2),
  plural1stPerson: Word('прогрызём', 2),
  plural2ndPerson: Word('прогрызёте', 9),
  plural3rdPerson: Word('прогрызут', 7),
  masculinePast: Word('прогрыз', 5),
  femininePast: Word('прогрызла', 5),
  neuterPast: Word('прогрызло', 5),
  pluralPast: Word('прогрызли', 5),
  imperativeInformal: Word('прогрызи', 7),
  imperativeFormal: Word('прогрызите', 7),
  imperfect: [],
};

perfectVerbs.set(прогрызть.name.text, прогрызть);

export { прогрызть };