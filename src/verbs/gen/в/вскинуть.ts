import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскинуть: PerfectVerb = {
  name: Word('вскинуть', 3),
  singular1stPerson: Word('вскину', 3),
  singular2ndPerson: Word('вскинешь', 3),
  singular3rdPerson: Word('вскинет', 3),
  plural1stPerson: Word('вскинем', 3),
  plural2ndPerson: Word('вскинете', 3),
  plural3rdPerson: Word('вскинут', 3),
  masculinePast: Word('вскинул', 3),
  femininePast: Word('вскинула', 3),
  neuterPast: Word('вскинуло', 3),
  pluralPast: Word('вскинули', 3),
  imperativeInformal: Word('вскинь', 3),
  imperativeFormal: Word('вскиньте', 3),
  imperfect: [],
};

perfectVerbs.set(вскинуть.name.text, вскинуть);

export { вскинуть };