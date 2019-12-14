import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const харкнуть: PerfectVerb = {
  name: Word('харкнуть', 1),
  singular1stPerson: Word('харкну', 1),
  singular2ndPerson: Word('харкнешь', 1),
  singular3rdPerson: Word('харкнет', 1),
  plural1stPerson: Word('харкнем', 1),
  plural2ndPerson: Word('харкнете', 1),
  plural3rdPerson: Word('харкнут', 1),
  masculinePast: Word('харкнул', 1),
  femininePast: Word('харкнула', 1),
  neuterPast: Word('харкнуло', 1),
  pluralPast: Word('харкнули', 1),
  imperativeInformal: Word('харкни', 1),
  imperativeFormal: Word('харкните', 1),
  imperfect: [],
};

perfectVerbs.set(харкнуть.name.text, харкнуть);

export { харкнуть };