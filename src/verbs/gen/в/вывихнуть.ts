import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывихнуть: PerfectVerb = {
  name: Word('вывихнуть', 1),
  singular1stPerson: Word('вывихну', 1),
  singular2ndPerson: Word('вывихнешь', 1),
  singular3rdPerson: Word('вывихнет', 1),
  plural1stPerson: Word('вывихнем', 1),
  plural2ndPerson: Word('вывихнете', 1),
  plural3rdPerson: Word('вывихнут', 1),
  masculinePast: Word('вывихнул', 1),
  femininePast: Word('вывихнула', 1),
  neuterPast: Word('вывихнуло', 1),
  pluralPast: Word('вывихнули', 1),
  imperativeInformal: Word('вывихни', 1),
  imperativeFormal: Word('вывихните', 1),
  imperfect: [],
};

perfectVerbs.set(вывихнуть.name.text, вывихнуть);

export { вывихнуть };