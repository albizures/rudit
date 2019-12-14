import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деревенеть: PerfectVerb = {
  name: Word('деревенеть', 7),
  singular1stPerson: Word('деревенею', 7),
  singular2ndPerson: Word('деревенеешь', 7),
  singular3rdPerson: Word('деревенеет', 7),
  plural1stPerson: Word('деревенеем', 7),
  plural2ndPerson: Word('деревенеете', 7),
  plural3rdPerson: Word('деревенеют', 7),
  masculinePast: Word('деревенел', 7),
  femininePast: Word('деревенела', 7),
  neuterPast: Word('деревенело', 7),
  pluralPast: Word('деревенели', 7),
  imperativeInformal: Word('деревеней', 7),
  imperativeFormal: Word('деревенейте', 7),
  imperfect: [],
};

perfectVerbs.set(деревенеть.name.text, деревенеть);

export { деревенеть };