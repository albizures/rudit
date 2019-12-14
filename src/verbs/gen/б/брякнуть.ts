import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брякнуть: PerfectVerb = {
  name: Word('брякнуть', 2),
  singular1stPerson: Word('брякну', 2),
  singular2ndPerson: Word('брякнешь', 2),
  singular3rdPerson: Word('брякнет', 2),
  plural1stPerson: Word('брякнем', 2),
  plural2ndPerson: Word('брякнете', 2),
  plural3rdPerson: Word('брякнут', 2),
  masculinePast: Word('брякнул', 2),
  femininePast: Word('брякнула', 2),
  neuterPast: Word('брякнуло', 2),
  pluralPast: Word('брякнули', 2),
  imperativeInformal: Word('брякни', 2),
  imperativeFormal: Word('брякните', 2),
  imperfect: [],
};

perfectVerbs.set(брякнуть.name.text, брякнуть);

export { брякнуть };