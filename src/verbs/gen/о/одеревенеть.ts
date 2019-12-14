import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одеревенеть: PerfectVerb = {
  name: Word('одеревенеть', 8),
  singular1stPerson: Word('одеревенею', 8),
  singular2ndPerson: Word('одеревенеешь', 8),
  singular3rdPerson: Word('одеревенеет', 8),
  plural1stPerson: Word('одеревенеем', 8),
  plural2ndPerson: Word('одеревенеете', 8),
  plural3rdPerson: Word('одеревенеют', 8),
  masculinePast: Word('одеревенел', 8),
  femininePast: Word('одеревенела', 8),
  neuterPast: Word('одеревенело', 8),
  pluralPast: Word('одеревенели', 8),
  imperativeInformal: Word('одеревеней', 8),
  imperativeFormal: Word('одеревенейте', 8),
  imperfect: ['деревенеть'],
};

perfectVerbs.set(одеревенеть.name.text, одеревенеть);

export { одеревенеть };