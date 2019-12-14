import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крепнуть: PerfectVerb = {
  name: Word('крепнуть', 2),
  singular1stPerson: Word('крепну', 2),
  singular2ndPerson: Word('крепнешь', 2),
  singular3rdPerson: Word('крепнет', 2),
  plural1stPerson: Word('крепнем', 2),
  plural2ndPerson: Word('крепнете', 2),
  plural3rdPerson: Word('крепнут', 2),
  masculinePast: Word('креп,кре'пнул', 2),
  femininePast: Word('крепла,кре'пнула', 2),
  neuterPast: Word('крепло,кре'пнуло', 2),
  pluralPast: Word('крепли,кре'пнули', 2),
  imperativeInformal: Word('крепни', 2),
  imperativeFormal: Word('крепните', 2),
  imperfect: ['окрепнуть'],
};

perfectVerbs.set(крепнуть.name.text, крепнуть);

export { крепнуть };