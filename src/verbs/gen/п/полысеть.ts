import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полысеть: PerfectVerb = {
  name: Word('полысеть', 5),
  singular1stPerson: Word('полысею', 5),
  singular2ndPerson: Word('полысеешь', 5),
  singular3rdPerson: Word('полысеет', 5),
  plural1stPerson: Word('полысеем', 5),
  plural2ndPerson: Word('полысеете', 5),
  plural3rdPerson: Word('полысеют', 5),
  masculinePast: Word('полысел', 5),
  femininePast: Word('полысела', 5),
  neuterPast: Word('полысело', 5),
  pluralPast: Word('полысели', 5),
  imperativeInformal: Word('полысей', 5),
  imperativeFormal: Word('полысейте', 5),
  imperfect: [],
};

perfectVerbs.set(полысеть.name.text, полысеть);

export { полысеть };