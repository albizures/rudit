import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обледенеть: PerfectVerb = {
  name: Word('обледенеть', 7),
  singular1stPerson: Word('обледенею', 7),
  singular2ndPerson: Word('обледенеешь', 7),
  singular3rdPerson: Word('обледенеет', 7),
  plural1stPerson: Word('обледенеем', 7),
  plural2ndPerson: Word('обледенеете', 7),
  plural3rdPerson: Word('обледенеют', 7),
  masculinePast: Word('обледенел', 7),
  femininePast: Word('обледенела', 7),
  neuterPast: Word('обледенело', 7),
  pluralPast: Word('обледенели', 7),
  imperativeInformal: Word('обледеней', 7),
  imperativeFormal: Word('обледенейте', 7),
  imperfect: [],
};

perfectVerbs.set(обледенеть.name.text, обледенеть);

export { обледенеть };