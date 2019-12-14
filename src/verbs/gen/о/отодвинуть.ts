import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отодвинуть: PerfectVerb = {
  name: Word('отодвинуть', 5),
  singular1stPerson: Word('отодвину', 5),
  singular2ndPerson: Word('отодвинешь', 5),
  singular3rdPerson: Word('отодвинет', 5),
  plural1stPerson: Word('отодвинем', 5),
  plural2ndPerson: Word('отодвинете', 5),
  plural3rdPerson: Word('отодвинут', 5),
  masculinePast: Word('отодвинул', 5),
  femininePast: Word('отодвинула', 5),
  neuterPast: Word('отодвинуло', 5),
  pluralPast: Word('отодвинули', 5),
  imperativeInformal: Word('отодвинь', 5),
  imperativeFormal: Word('отодвиньте', 5),
  imperfect: [],
};

perfectVerbs.set(отодвинуть.name.text, отодвинуть);

export { отодвинуть };