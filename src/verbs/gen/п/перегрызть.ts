import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегрызть: PerfectVerb = {
  name: Word('перегрызть', 6),
  singular1stPerson: Word('перегрызу', 8),
  singular2ndPerson: Word('перегрызёшь', 1),
  singular3rdPerson: Word('перегрызёт', 1),
  plural1stPerson: Word('перегрызём', 1),
  plural2ndPerson: Word('перегрызёте', 1),
  plural3rdPerson: Word('перегрызут', 8),
  masculinePast: Word('перегрыз', 6),
  femininePast: Word('перегрызла', 6),
  neuterPast: Word('перегрызло', 6),
  pluralPast: Word('перегрызли', 6),
  imperativeInformal: Word('перегрызи', 8),
  imperativeFormal: Word('перегрызите', 8),
  imperfect: [],
};

perfectVerbs.set(перегрызть.name.text, перегрызть);

export { перегрызть };