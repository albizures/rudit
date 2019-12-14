import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикинуть: PerfectVerb = {
  name: Word('прикинуть', 4),
  singular1stPerson: Word('прикину', 4),
  singular2ndPerson: Word('прикинешь', 4),
  singular3rdPerson: Word('прикинет', 4),
  plural1stPerson: Word('прикинем', 4),
  plural2ndPerson: Word('прикинете', 4),
  plural3rdPerson: Word('прикинут', 4),
  masculinePast: Word('прикинул', 4),
  femininePast: Word('прикинула', 4),
  neuterPast: Word('прикинуло', 4),
  pluralPast: Word('прикинули', 4),
  imperativeInformal: Word('прикинь', 4),
  imperativeFormal: Word('прикиньте', 4),
  imperfect: [],
};

perfectVerbs.set(прикинуть.name.text, прикинуть);

export { прикинуть };