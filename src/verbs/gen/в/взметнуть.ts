import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взметнуть: PerfectVerb = {
  name: Word('взметнуть', 6),
  singular1stPerson: Word('взметну', 6),
  singular2ndPerson: Word('взметнёшь', 3),
  singular3rdPerson: Word('взметнёт', 3),
  plural1stPerson: Word('взметнём', 3),
  plural2ndPerson: Word('взметнёте', 3),
  plural3rdPerson: Word('взметнут', 6),
  masculinePast: Word('взметнул', 6),
  femininePast: Word('взметнула', 6),
  neuterPast: Word('взметнуло', 6),
  pluralPast: Word('взметнули', 6),
  imperativeInformal: Word('взметни', 6),
  imperativeFormal: Word('взметните', 6),
  imperfect: ['взметать','взмётывать'],
};

perfectVerbs.set(взметнуть.name.text, взметнуть);

export { взметнуть };