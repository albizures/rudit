import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свергнуть: PerfectVerb = {
  name: Word('свергнуть', 2),
  singular1stPerson: Word('свергну', 2),
  singular2ndPerson: Word('свергнешь', 2),
  singular3rdPerson: Word('свергнет', 2),
  plural1stPerson: Word('свергнем', 2),
  plural2ndPerson: Word('свергнете', 2),
  plural3rdPerson: Word('свергнут', 2),
  masculinePast: Word('сверг//све'ргнул', 2),
  femininePast: Word('свергла', 2),
  neuterPast: Word('свергло', 2),
  pluralPast: Word('свергли', 2),
  imperativeInformal: Word('свергни', 2),
  imperativeFormal: Word('свергните', 2),
  imperfect: [],
};

perfectVerbs.set(свергнуть.name.text, свергнуть);

export { свергнуть };