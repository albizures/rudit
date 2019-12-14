import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстегнуть: PerfectVerb = {
  name: Word('подстегнуть', 8),
  singular1stPerson: Word('подстегну', 8),
  singular2ndPerson: Word('подстегнёшь', 5),
  singular3rdPerson: Word('подстегнёт', 5),
  plural1stPerson: Word('подстегнём', 5),
  plural2ndPerson: Word('подстегнёте', 5),
  plural3rdPerson: Word('подстегнут', 8),
  masculinePast: Word('подстегнул', 8),
  femininePast: Word('подстегнула', 8),
  neuterPast: Word('подстегнуло', 8),
  pluralPast: Word('подстегнули', 8),
  imperativeInformal: Word('подстегни', 8),
  imperativeFormal: Word('подстегните', 8),
  imperfect: [],
};

perfectVerbs.set(подстегнуть.name.text, подстегнуть);

export { подстегнуть };