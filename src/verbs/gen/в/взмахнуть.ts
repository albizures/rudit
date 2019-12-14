import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмахнуть: PerfectVerb = {
  name: Word('взмахнуть', 6),
  singular1stPerson: Word('взмахну', 6),
  singular2ndPerson: Word('взмахнёшь', 6),
  singular3rdPerson: Word('взмахнёт', 6),
  plural1stPerson: Word('взмахнём', 6),
  plural2ndPerson: Word('взмахнёте', 6),
  plural3rdPerson: Word('взмахнут', 6),
  masculinePast: Word('взмахнул', 6),
  femininePast: Word('взмахнула', 6),
  neuterPast: Word('взмахнуло', 6),
  pluralPast: Word('взмахнули', 6),
  imperativeInformal: Word('взмахни', 6),
  imperativeFormal: Word('взмахните', 6),
  imperfect: [],
};

perfectVerbs.set(взмахнуть.name.text, взмахнуть);

export { взмахнуть };