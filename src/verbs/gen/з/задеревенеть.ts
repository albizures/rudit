import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задеревенеть: PerfectVerb = {
  name: Word('задеревенеть', 9),
  singular1stPerson: Word('задеревенею', 9),
  singular2ndPerson: Word('задеревенеешь', 9),
  singular3rdPerson: Word('задеревенеет', 9),
  plural1stPerson: Word('задеревенеем', 9),
  plural2ndPerson: Word('задеревенеете', 9),
  plural3rdPerson: Word('задеревенеют', 9),
  masculinePast: Word('задеревенел', 9),
  femininePast: Word('задеревенела', 9),
  neuterPast: Word('задеревенело', 9),
  pluralPast: Word('задеревенели', 9),
  imperativeInformal: Word('задеревеней', 9),
  imperativeFormal: Word('задеревенейте', 9),
  imperfect: [],
};

perfectVerbs.set(задеревенеть.name.text, задеревенеть);

export { задеревенеть };