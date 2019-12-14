import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгрызть: PerfectVerb = {
  name: Word('сгрызть', 3),
  singular1stPerson: Word('сгрызу', 5),
  singular2ndPerson: Word('сгрызёшь', 5),
  singular3rdPerson: Word('сгрызёт', 5),
  plural1stPerson: Word('сгрызём', 5),
  plural2ndPerson: Word('сгрызёте', 5),
  plural3rdPerson: Word('сгрызут', 5),
  masculinePast: Word('сгрыз', 3),
  femininePast: Word('сгрызла', 3),
  neuterPast: Word('сгрызло', 3),
  pluralPast: Word('сгрызли', 3),
  imperativeInformal: Word('сгрызи', 5),
  imperativeFormal: Word('сгрызите', 5),
  imperfect: [],
};

perfectVerbs.set(сгрызть.name.text, сгрызть);

export { сгрызть };