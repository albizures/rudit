import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накинуть: PerfectVerb = {
  name: Word('накинуть', 3),
  singular1stPerson: Word('накину', 3),
  singular2ndPerson: Word('накинешь', 3),
  singular3rdPerson: Word('накинет', 3),
  plural1stPerson: Word('накинем', 3),
  plural2ndPerson: Word('накинете', 3),
  plural3rdPerson: Word('накинут', 3),
  masculinePast: Word('накинул', 3),
  femininePast: Word('накинула', 3),
  neuterPast: Word('накинуло', 3),
  pluralPast: Word('накинули', 3),
  imperativeInformal: Word('накинь', 3),
  imperativeFormal: Word('накиньте', 3),
  imperfect: [],
};

perfectVerbs.set(накинуть.name.text, накинуть);

export { накинуть };