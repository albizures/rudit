import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окликнуть: PerfectVerb = {
  name: Word('окликнуть', 3),
  singular1stPerson: Word('окликну', 3),
  singular2ndPerson: Word('окликнешь', 3),
  singular3rdPerson: Word('окликнет', 3),
  plural1stPerson: Word('окликнем', 3),
  plural2ndPerson: Word('окликнете', 3),
  plural3rdPerson: Word('окликнут', 3),
  masculinePast: Word('окликнул', 3),
  femininePast: Word('окликнула', 3),
  neuterPast: Word('окликнуло', 3),
  pluralPast: Word('окликнули', 3),
  imperativeInformal: Word('окликни', 3),
  imperativeFormal: Word('окликните', 3),
  imperfect: [],
};

perfectVerbs.set(окликнуть.name.text, окликнуть);

export { окликнуть };