import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдвинуть: PerfectVerb = {
  name: Word('вдвинуть', 3),
  singular1stPerson: Word('вдвину', 3),
  singular2ndPerson: Word('вдвинешь', 3),
  singular3rdPerson: Word('вдвинет', 3),
  plural1stPerson: Word('вдвинем', 3),
  plural2ndPerson: Word('вдвинете', 3),
  plural3rdPerson: Word('вдвинут', 3),
  masculinePast: Word('вдвинул', 3),
  femininePast: Word('вдвинула', 3),
  neuterPast: Word('вдвинуло', 3),
  pluralPast: Word('вдвинули', 3),
  imperativeInformal: Word('вдвинь', 3),
  imperativeFormal: Word('вдвиньте', 3),
  imperfect: [],
};

perfectVerbs.set(вдвинуть.name.text, вдвинуть);

export { вдвинуть };