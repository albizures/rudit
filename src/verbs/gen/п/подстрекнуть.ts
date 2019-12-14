import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстрекнуть: PerfectVerb = {
  name: Word('подстрекнуть', 9),
  singular1stPerson: Word('подстрекну', 9),
  singular2ndPerson: Word('подстрекнёшь', 6),
  singular3rdPerson: Word('подстрекнёт', 6),
  plural1stPerson: Word('подстрекнём', 6),
  plural2ndPerson: Word('подстрекнёте', 6),
  plural3rdPerson: Word('подстрекнут', 9),
  masculinePast: Word('подстрекнул', 9),
  femininePast: Word('подстрекнула', 9),
  neuterPast: Word('подстрекнуло', 9),
  pluralPast: Word('подстрекнули', 9),
  imperativeInformal: Word('подстрекни', 9),
  imperativeFormal: Word('подстрекните', 9),
  imperfect: ['подстрекать'],
};

perfectVerbs.set(подстрекнуть.name.text, подстрекнуть);

export { подстрекнуть };