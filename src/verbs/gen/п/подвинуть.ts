import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвинуть: PerfectVerb = {
  name: Word('подвинуть', 4),
  singular1stPerson: Word('подвину', 4),
  singular2ndPerson: Word('подвинешь', 4),
  singular3rdPerson: Word('подвинет', 4),
  plural1stPerson: Word('подвинем', 4),
  plural2ndPerson: Word('подвинете', 4),
  plural3rdPerson: Word('подвинут', 4),
  masculinePast: Word('подвинул', 4),
  femininePast: Word('подвинула', 4),
  neuterPast: Word('подвинуло', 4),
  pluralPast: Word('подвинули', 4),
  imperativeInformal: Word('подвинь', 4),
  imperativeFormal: Word('подвиньте', 4),
  imperfect: [],
};

perfectVerbs.set(подвинуть.name.text, подвинуть);

export { подвинуть };