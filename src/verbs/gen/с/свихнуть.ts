import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свихнуть: PerfectVerb = {
  name: Word('свихнуть', 5),
  singular1stPerson: Word('свихну', 5),
  singular2ndPerson: Word('свихнёшь', 2),
  singular3rdPerson: Word('свихнёт', 2),
  plural1stPerson: Word('свихнём', 2),
  plural2ndPerson: Word('свихнёте', 7),
  plural3rdPerson: Word('свихнут', 5),
  masculinePast: Word('свихнул', 5),
  femininePast: Word('свихнула', 5),
  neuterPast: Word('свихнуло', 5),
  pluralPast: Word('свихнули', 5),
  imperativeInformal: Word('свихни', 5),
  imperativeFormal: Word('свихните', 5),
  imperfect: [],
};

perfectVerbs.set(свихнуть.name.text, свихнуть);

export { свихнуть };