import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шевельнуть: PerfectVerb = {
  name: Word('шевельнуть', 7),
  singular1stPerson: Word('шевельну', 7),
  singular2ndPerson: Word('шевельнёшь', 7),
  singular3rdPerson: Word('шевельнёт', 7),
  plural1stPerson: Word('шевельнём', 7),
  plural2ndPerson: Word('шевельнёте', 7),
  plural3rdPerson: Word('шевельнут', 7),
  masculinePast: Word('шевельнул', 7),
  femininePast: Word('шевельнула', 7),
  neuterPast: Word('шевельнуло', 7),
  pluralPast: Word('шевельнули', 7),
  imperativeInformal: Word('шевельни', 7),
  imperativeFormal: Word('шевельните', 7),
  imperfect: [],
};

perfectVerbs.set(шевельнуть.name.text, шевельнуть);

export { шевельнуть };