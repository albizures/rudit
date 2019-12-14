import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влипнуть: PerfectVerb = {
  name: Word('влипнуть', 2),
  singular1stPerson: Word('влипну', 2),
  singular2ndPerson: Word('влипнешь', 2),
  singular3rdPerson: Word('влипнет', 2),
  plural1stPerson: Word('влипнем', 2),
  plural2ndPerson: Word('влипнете', 2),
  plural3rdPerson: Word('влипнут', 2),
  masculinePast: Word('влип', 2),
  femininePast: Word('влипла', 2),
  neuterPast: Word('влипло', 2),
  pluralPast: Word('влипли', 2),
  imperativeInformal: Word('влипни', 2),
  imperativeFormal: Word('влипните', 2),
  imperfect: [],
};

perfectVerbs.set(влипнуть.name.text, влипнуть);

export { влипнуть };