import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпрянуть: PerfectVerb = {
  name: Word('отпрянуть', 4),
  singular1stPerson: Word('отпряну', 4),
  singular2ndPerson: Word('отпрянешь', 4),
  singular3rdPerson: Word('отпрянет', 4),
  plural1stPerson: Word('отпрянем', 4),
  plural2ndPerson: Word('отпрянете', 4),
  plural3rdPerson: Word('отпрянут', 4),
  masculinePast: Word('отпрянул', 4),
  femininePast: Word('отпрянула', 4),
  neuterPast: Word('отпрянуло', 4),
  pluralPast: Word('отпрянули', 4),
  imperativeInformal: Word('отпрянь', 4),
  imperativeFormal: Word('отпряньте', 4),
  imperfect: [],
};

perfectVerbs.set(отпрянуть.name.text, отпрянуть);

export { отпрянуть };