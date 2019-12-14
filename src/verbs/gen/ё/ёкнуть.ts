import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёкнуть: PerfectVerb = {
  name: Word('ёкнуть', 3),
  singular1stPerson: Word('ёкну', 3),
  singular2ndPerson: Word('ёкнешь', 3),
  singular3rdPerson: Word('ёкнет', 3),
  plural1stPerson: Word('ёкнем', 3),
  plural2ndPerson: Word('ёкнете', 3),
  plural3rdPerson: Word('ёкнут', 3),
  masculinePast: Word('ёкнул', 3),
  femininePast: Word('ёкнула', 5),
  neuterPast: Word('ёкнуло', 5),
  pluralPast: Word('ёкнули', 5),
  imperativeInformal: Word('ёкни', 3),
  imperativeFormal: Word('ёкните', 5),
  imperfect: [],
};

perfectVerbs.set(ёкнуть.name.text, ёкнуть);

export { ёкнуть };