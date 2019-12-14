import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низвергнуть: PerfectVerb = {
  name: Word('низвергнуть', 4),
  singular1stPerson: Word('низвергну', 4),
  singular2ndPerson: Word('низвергнешь', 4),
  singular3rdPerson: Word('низвергнет', 4),
  plural1stPerson: Word('низвергнем', 4),
  plural2ndPerson: Word('низвергнете', 4),
  plural3rdPerson: Word('низвергнут', 4),
  masculinePast: Word('низверг//низве'ргнул', 4),
  femininePast: Word('низвергла', 4),
  neuterPast: Word('низвергло', 4),
  pluralPast: Word('низвергли', 4),
  imperativeInformal: Word('низвергни', 4),
  imperativeFormal: Word('низвергните', 4),
  imperfect: [],
};

perfectVerbs.set(низвергнуть.name.text, низвергнуть);

export { низвергнуть };