import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мрачнеть: PerfectVerb = {
  name: Word('мрачнеть', 5),
  singular1stPerson: Word('мрачнею', 5),
  singular2ndPerson: Word('мрачнеешь', 5),
  singular3rdPerson: Word('мрачнеет', 5),
  plural1stPerson: Word('мрачнеем', 5),
  plural2ndPerson: Word('мрачнеете', 5),
  plural3rdPerson: Word('мрачнеют', 5),
  masculinePast: Word('мрачнел', 5),
  femininePast: Word('мрачнела', 5),
  neuterPast: Word('мрачнело', 5),
  pluralPast: Word('мрачнели', 5),
  imperativeInformal: Word('мрачней', 5),
  imperativeFormal: Word('мрачнейте', 5),
  imperfect: [],
};

perfectVerbs.set(мрачнеть.name.text, мрачнеть);

export { мрачнеть };