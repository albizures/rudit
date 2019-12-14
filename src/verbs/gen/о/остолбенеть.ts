import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остолбенеть: PerfectVerb = {
  name: Word('остолбенеть', 8),
  singular1stPerson: Word('остолбенею', 8),
  singular2ndPerson: Word('остолбенеешь', 8),
  singular3rdPerson: Word('остолбенеет', 8),
  plural1stPerson: Word('остолбенеем', 8),
  plural2ndPerson: Word('остолбенеете', 8),
  plural3rdPerson: Word('остолбенеют', 8),
  masculinePast: Word('остолбенел', 8),
  femininePast: Word('остолбенела', 8),
  neuterPast: Word('остолбенело', 8),
  pluralPast: Word('остолбенели', 8),
  imperativeInformal: Word('остолбеней', 8),
  imperativeFormal: Word('остолбенейте', 8),
  imperfect: [],
};

perfectVerbs.set(остолбенеть.name.text, остолбенеть);

export { остолбенеть };