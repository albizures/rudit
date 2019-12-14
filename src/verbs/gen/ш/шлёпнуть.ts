import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпнуть: PerfectVerb = {
  name: Word('шлёпнуть', 2),
  singular1stPerson: Word('шлёпну', 2),
  singular2ndPerson: Word('шлёпнешь', 2),
  singular3rdPerson: Word('шлёпнет', 2),
  plural1stPerson: Word('шлёпнем', 2),
  plural2ndPerson: Word('шлёпнете', 2),
  plural3rdPerson: Word('шлёпнут', 2),
  masculinePast: Word('шлёпнул', 2),
  femininePast: Word('шлёпнула', 2),
  neuterPast: Word('шлёпнуло', 2),
  pluralPast: Word('шлёпнули', 2),
  imperativeInformal: Word('шлёпни', 2),
  imperativeFormal: Word('шлёпните', 2),
  imperfect: [],
};

perfectVerbs.set(шлёпнуть.name.text, шлёпнуть);

export { шлёпнуть };