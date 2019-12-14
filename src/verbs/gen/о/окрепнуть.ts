import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрепнуть: PerfectVerb = {
  name: Word('окрепнуть', 3),
  singular1stPerson: Word('окрепну', 3),
  singular2ndPerson: Word('окрепнешь', 3),
  singular3rdPerson: Word('окрепнет', 3),
  plural1stPerson: Word('окрепнем', 3),
  plural2ndPerson: Word('окрепнете', 3),
  plural3rdPerson: Word('окрепнут', 3),
  masculinePast: Word('окреп,окре'пнул', 3),
  femininePast: Word('окрепла,окре'пнула', 3),
  neuterPast: Word('окрепло,окре'пнуло', 3),
  pluralPast: Word('окрепли,окре'пнули', 3),
  imperativeInformal: Word('окрепни', 3),
  imperativeFormal: Word('окрепните', 3),
  imperfect: ['крепнуть'],
};

perfectVerbs.set(окрепнуть.name.text, окрепнуть);

export { окрепнуть };