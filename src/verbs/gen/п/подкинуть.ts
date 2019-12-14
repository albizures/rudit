import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкинуть: PerfectVerb = {
  name: Word('подкинуть', 4),
  singular1stPerson: Word('подкину', 4),
  singular2ndPerson: Word('подкинешь', 4),
  singular3rdPerson: Word('подкинет', 4),
  plural1stPerson: Word('подкинем', 4),
  plural2ndPerson: Word('подкинете', 4),
  plural3rdPerson: Word('подкинут', 4),
  masculinePast: Word('подкинул', 4),
  femininePast: Word('подкинула', 4),
  neuterPast: Word('подкинуло', 4),
  pluralPast: Word('подкинули', 4),
  imperativeInformal: Word('подкинь', 4),
  imperativeFormal: Word('подкиньте', 4),
  imperfect: [],
};

perfectVerbs.set(подкинуть.name.text, подкинуть);

export { подкинуть };