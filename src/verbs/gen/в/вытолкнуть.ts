import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытолкнуть: PerfectVerb = {
  name: Word('вытолкнуть', 1),
  singular1stPerson: Word('вытолкну', 1),
  singular2ndPerson: Word('вытолкнешь', 1),
  singular3rdPerson: Word('вытолкнет', 1),
  plural1stPerson: Word('вытолкнем', 1),
  plural2ndPerson: Word('вытолкнете', 1),
  plural3rdPerson: Word('вытолкнут', 1),
  masculinePast: Word('вытолкнул', 1),
  femininePast: Word('вытолкнула', 1),
  neuterPast: Word('вытолкнуло', 1),
  pluralPast: Word('вытолкнули', 1),
  imperativeInformal: Word('вытолкни', 1),
  imperativeFormal: Word('вытолкните', 1),
  imperfect: [],
};

perfectVerbs.set(вытолкнуть.name.text, вытолкнуть);

export { вытолкнуть };