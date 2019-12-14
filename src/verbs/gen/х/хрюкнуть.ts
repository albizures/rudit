import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хрюкнуть: PerfectVerb = {
  name: Word('хрюкнуть', 2),
  singular1stPerson: Word('хрюкну', 2),
  singular2ndPerson: Word('хрюкнешь', 2),
  singular3rdPerson: Word('хрюкнет', 2),
  plural1stPerson: Word('хрюкнем', 2),
  plural2ndPerson: Word('хрюкнете', 2),
  plural3rdPerson: Word('хрюкнут', 2),
  masculinePast: Word('хрюкнул', 2),
  femininePast: Word('хрюкнула', 2),
  neuterPast: Word('хрюкнуло', 2),
  pluralPast: Word('хрюкнули', 2),
  imperativeInformal: Word('хрюкни', 2),
  imperativeFormal: Word('хрюкните', 2),
  imperfect: [],
};

perfectVerbs.set(хрюкнуть.name.text, хрюкнуть);

export { хрюкнуть };