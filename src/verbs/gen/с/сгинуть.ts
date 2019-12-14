import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгинуть: PerfectVerb = {
  name: Word('сгинуть', 2),
  singular1stPerson: Word('сгину', 2),
  singular2ndPerson: Word('сгинешь', 2),
  singular3rdPerson: Word('сгинет', 2),
  plural1stPerson: Word('сгинем', 2),
  plural2ndPerson: Word('сгинете', 2),
  plural3rdPerson: Word('сгинут', 2),
  masculinePast: Word('сгинул', 2),
  femininePast: Word('сгинула', 2),
  neuterPast: Word('сгинуло', 2),
  pluralPast: Word('сгинули', 2),
  imperativeInformal: Word('сгинь', 2),
  imperativeFormal: Word('сгиньте', 2),
  imperfect: [],
};

perfectVerbs.set(сгинуть.name.text, сгинуть);

export { сгинуть };