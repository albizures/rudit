import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налипнуть: PerfectVerb = {
  name: Word('налипнуть', 3),
  singular1stPerson: Word('налипну', 3),
  singular2ndPerson: Word('налипнешь', 3),
  singular3rdPerson: Word('налипнет', 3),
  plural1stPerson: Word('налипнем', 3),
  plural2ndPerson: Word('налипнете', 3),
  plural3rdPerson: Word('налипнут', 3),
  masculinePast: Word('налип', 3),
  femininePast: Word('налипла', 3),
  neuterPast: Word('налипло', 3),
  pluralPast: Word('налипли', 3),
  imperativeInformal: Word('налипни', 3),
  imperativeFormal: Word('налипните', 3),
  imperfect: [],
};

perfectVerbs.set(налипнуть.name.text, налипнуть);

export { налипнуть };