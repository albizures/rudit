import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тявкнуть: PerfectVerb = {
  name: Word('тявкнуть', 1),
  singular1stPerson: Word('тявкну', 1),
  singular2ndPerson: Word('тявкнешь', 1),
  singular3rdPerson: Word('тявкнет', 1),
  plural1stPerson: Word('тявкнем', 1),
  plural2ndPerson: Word('тявкнете', 1),
  plural3rdPerson: Word('тявкнут', 1),
  masculinePast: Word('тявкнул', 1),
  femininePast: Word('тявкнула', 1),
  neuterPast: Word('тявкнуло', 1),
  pluralPast: Word('тявкнули', 1),
  imperativeInformal: Word('тявкни', 1),
  imperativeFormal: Word('тявкните', 1),
  imperfect: [],
};

perfectVerbs.set(тявкнуть.name.text, тявкнуть);

export { тявкнуть };