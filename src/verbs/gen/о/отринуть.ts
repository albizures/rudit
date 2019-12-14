import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отринуть: PerfectVerb = {
  name: Word('отринуть', 3),
  singular1stPerson: Word('отрину', 3),
  singular2ndPerson: Word('отринешь', 3),
  singular3rdPerson: Word('отринет', 3),
  plural1stPerson: Word('отринем', 3),
  plural2ndPerson: Word('отринете', 3),
  plural3rdPerson: Word('отринут', 3),
  masculinePast: Word('отринул', 3),
  femininePast: Word('отринула', 3),
  neuterPast: Word('отринуло', 3),
  pluralPast: Word('отринули', 3),
  imperativeInformal: Word('отринь', 3),
  imperativeFormal: Word('отриньте', 3),
  imperfect: [],
};

perfectVerbs.set(отринуть.name.text, отринуть);

export { отринуть };