import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдвинуть: PerfectVerb = {
  name: Word('сдвинуть', 3),
  singular1stPerson: Word('сдвину', 3),
  singular2ndPerson: Word('сдвинешь', 3),
  singular3rdPerson: Word('сдвинет', 3),
  plural1stPerson: Word('сдвинем', 3),
  plural2ndPerson: Word('сдвинете', 3),
  plural3rdPerson: Word('сдвинут', 3),
  masculinePast: Word('сдвинул', 3),
  femininePast: Word('сдвинула', 3),
  neuterPast: Word('сдвинуло', 3),
  pluralPast: Word('сдвинули', 3),
  imperativeInformal: Word('сдвинь', 3),
  imperativeFormal: Word('сдвиньте', 3),
  imperfect: [],
};

perfectVerbs.set(сдвинуть.name.text, сдвинуть);

export { сдвинуть };