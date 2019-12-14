import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увильнуть: PerfectVerb = {
  name: Word('увильнуть', 6),
  singular1stPerson: Word('увильну', 6),
  singular2ndPerson: Word('увильнёшь', 2),
  singular3rdPerson: Word('увильнёт', 2),
  plural1stPerson: Word('увильнём', 2),
  plural2ndPerson: Word('увильнёте', 8),
  plural3rdPerson: Word('увильнут', 6),
  masculinePast: Word('увильнул', 6),
  femininePast: Word('увильнула', 6),
  neuterPast: Word('увильнуло', 6),
  pluralPast: Word('увильнули', 6),
  imperativeInformal: Word('увильни', 6),
  imperativeFormal: Word('увильните', 6),
  imperfect: ['увиливать'],
};

perfectVerbs.set(увильнуть.name.text, увильнуть);

export { увильнуть };