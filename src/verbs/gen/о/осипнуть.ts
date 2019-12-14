import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осипнуть: PerfectVerb = {
  name: Word('осипнуть', 2),
  singular1stPerson: Word('осипну', 2),
  singular2ndPerson: Word('осипнешь', 2),
  singular3rdPerson: Word('осипнет', 2),
  plural1stPerson: Word('осипнем', 2),
  plural2ndPerson: Word('осипнете', 2),
  plural3rdPerson: Word('осипнут', 2),
  masculinePast: Word('осип', 2),
  femininePast: Word('осипла', 2),
  neuterPast: Word('осипло', 2),
  pluralPast: Word('осипли', 2),
  imperativeInformal: Word('осипни', 2),
  imperativeFormal: Word('осипните', 2),
  imperfect: [],
};

perfectVerbs.set(осипнуть.name.text, осипнуть);

export { осипнуть };