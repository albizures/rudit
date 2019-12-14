import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздуть: PerfectVerb = {
  name: Word('вздуть', 3),
  singular1stPerson: Word('вздую', 3),
  singular2ndPerson: Word('вздуешь', 3),
  singular3rdPerson: Word('вздует', 3),
  plural1stPerson: Word('вздуем', 3),
  plural2ndPerson: Word('вздуете', 3),
  plural3rdPerson: Word('вздуют', 3),
  masculinePast: Word('вздул', 3),
  femininePast: Word('вздула', 3),
  neuterPast: Word('вздуло', 3),
  pluralPast: Word('вздули', 3),
  imperativeInformal: Word('вздуй', 3),
  imperativeFormal: Word('вздуйте', 3),
  imperfect: [],
};

perfectVerbs.set(вздуть.name.text, вздуть);

export { вздуть };