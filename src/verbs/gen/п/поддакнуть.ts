import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддакнуть: PerfectVerb = {
  name: Word('поддакнуть', 4),
  singular1stPerson: Word('поддакну', 4),
  singular2ndPerson: Word('поддакнешь', 4),
  singular3rdPerson: Word('поддакнет', 4),
  plural1stPerson: Word('поддакнем', 4),
  plural2ndPerson: Word('поддакнете', 4),
  plural3rdPerson: Word('поддакнут', 4),
  masculinePast: Word('поддакнул', 4),
  femininePast: Word('поддакнула', 4),
  neuterPast: Word('поддакнуло', 4),
  pluralPast: Word('поддакнули', 4),
  imperativeInformal: Word('поддакни', 4),
  imperativeFormal: Word('поддакните', 4),
  imperfect: [],
};

perfectVerbs.set(поддакнуть.name.text, поддакнуть);

export { поддакнуть };