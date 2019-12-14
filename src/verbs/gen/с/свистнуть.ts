import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свистнуть: PerfectVerb = {
  name: Word('свистнуть', 2),
  singular1stPerson: Word('свистну', 2),
  singular2ndPerson: Word('свистнешь', 2),
  singular3rdPerson: Word('свистнет', 2),
  plural1stPerson: Word('свистнем', 2),
  plural2ndPerson: Word('свистнете', 2),
  plural3rdPerson: Word('свистнут', 2),
  masculinePast: Word('свистнул', 2),
  femininePast: Word('свистнула', 2),
  neuterPast: Word('свистнуло', 2),
  pluralPast: Word('свистнули', 2),
  imperativeInformal: Word('свистни', 2),
  imperativeFormal: Word('свистните', 2),
  imperfect: ['свистеть'],
};

perfectVerbs.set(свистнуть.name.text, свистнуть);

export { свистнуть };