import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёкнуть: PerfectVerb = {
  name: Word('ёкнуть', 0),
  singular1stPerson: Word('ёкну', 0),
  singular2ndPerson: Word('ёкнешь', 0),
  singular3rdPerson: Word('ёкнет', 0),
  plural1stPerson: Word('ёкнем', 0),
  plural2ndPerson: Word('ёкнете', 0),
  plural3rdPerson: Word('ёкнут', 0),
  masculinePast: Word('ёкнул', 0),
  femininePast: Word('ёкнула', 0),
  neuterPast: Word('ёкнуло', 0),
  pluralPast: Word('ёкнули', 0),
  imperativeInformal: Word('ёкни', 0),
  imperativeFormal: Word('ёкните', 0),
  imperfect: [],
};

perfectVerbs.set(ёкнуть.name.text, ёкнуть);

export { ёкнуть };