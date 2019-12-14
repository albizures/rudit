import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкинуть: PerfectVerb = {
  name: Word('выкинуть', 1),
  singular1stPerson: Word('выкину', 1),
  singular2ndPerson: Word('выкинешь', 1),
  singular3rdPerson: Word('выкинет', 1),
  plural1stPerson: Word('выкинем', 1),
  plural2ndPerson: Word('выкинете', 1),
  plural3rdPerson: Word('выкинут', 1),
  masculinePast: Word('выкинул', 1),
  femininePast: Word('выкинула', 1),
  neuterPast: Word('выкинуло', 1),
  pluralPast: Word('выкинули', 1),
  imperativeInformal: Word('выкинь', 1),
  imperativeFormal: Word('выкиньте', 1),
  imperfect: [],
};

perfectVerbs.set(выкинуть.name.text, выкинуть);

export { выкинуть };