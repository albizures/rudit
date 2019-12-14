import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпнуть: PerfectVerb = {
  name: Word('шлёпнуть', 5),
  singular1stPerson: Word('шлёпну', 5),
  singular2ndPerson: Word('шлёпнешь', 5),
  singular3rdPerson: Word('шлёпнет', 5),
  plural1stPerson: Word('шлёпнем', 5),
  plural2ndPerson: Word('шлёпнете', 5),
  plural3rdPerson: Word('шлёпнут', 5),
  masculinePast: Word('шлёпнул', 5),
  femininePast: Word('шлёпнула', 7),
  neuterPast: Word('шлёпнуло', 7),
  pluralPast: Word('шлёпнули', 7),
  imperativeInformal: Word('шлёпни', 5),
  imperativeFormal: Word('шлёпните', 7),
  imperfect: [],
};

perfectVerbs.set(шлёпнуть.name.text, шлёпнуть);

export { шлёпнуть };