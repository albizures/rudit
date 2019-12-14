import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдохнуть: PerfectVerb = {
  name: Word('выдохнуть', 1),
  singular1stPerson: Word('выдохну', 1),
  singular2ndPerson: Word('выдохнешь', 1),
  singular3rdPerson: Word('выдохнет', 1),
  plural1stPerson: Word('выдохнем', 1),
  plural2ndPerson: Word('выдохнете', 1),
  plural3rdPerson: Word('выдохнут', 1),
  masculinePast: Word('выдохнул', 1),
  femininePast: Word('выдохнула', 1),
  neuterPast: Word('выдохнуло', 1),
  pluralPast: Word('выдохнули', 1),
  imperativeInformal: Word('выдохни', 1),
  imperativeFormal: Word('выдохните', 1),
  imperfect: [],
};

perfectVerbs.set(выдохнуть.name.text, выдохнуть);

export { выдохнуть };