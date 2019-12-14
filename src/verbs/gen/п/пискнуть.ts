import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пискнуть: PerfectVerb = {
  name: Word('пискнуть', 1),
  singular1stPerson: Word('пискну', 1),
  singular2ndPerson: Word('пискнешь', 1),
  singular3rdPerson: Word('пискнет', 1),
  plural1stPerson: Word('пискнем', 1),
  plural2ndPerson: Word('пискнете', 1),
  plural3rdPerson: Word('пискнут', 1),
  masculinePast: Word('пискнул', 1),
  femininePast: Word('пискнула', 1),
  neuterPast: Word('пискнуло', 1),
  pluralPast: Word('пискнули', 1),
  imperativeInformal: Word('пискни', 1),
  imperativeFormal: Word('пискните', 1),
  imperfect: [],
};

perfectVerbs.set(пискнуть.name.text, пискнуть);

export { пискнуть };