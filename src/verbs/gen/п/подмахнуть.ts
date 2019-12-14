import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмахнуть: PerfectVerb = {
  name: Word('подмахнуть', 7),
  singular1stPerson: Word('подмахну', 7),
  singular2ndPerson: Word('подмахнёшь', 4),
  singular3rdPerson: Word('подмахнёт', 4),
  plural1stPerson: Word('подмахнём', 4),
  plural2ndPerson: Word('подмахнёте', 4),
  plural3rdPerson: Word('подмахнут', 7),
  masculinePast: Word('подмахнул', 7),
  femininePast: Word('подмахнула', 7),
  neuterPast: Word('подмахнуло', 7),
  pluralPast: Word('подмахнули', 7),
  imperativeInformal: Word('подмахни', 7),
  imperativeFormal: Word('подмахните', 7),
  imperfect: [],
};

perfectVerbs.set(подмахнуть.name.text, подмахнуть);

export { подмахнуть };