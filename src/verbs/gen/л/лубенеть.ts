import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лубенеть: PerfectVerb = {
  name: Word('лубенеть', 5),
  singular1stPerson: Word('лубенею', 5),
  singular2ndPerson: Word('лубенеешь', 5),
  singular3rdPerson: Word('лубенеет', 5),
  plural1stPerson: Word('лубенеем', 5),
  plural2ndPerson: Word('лубенеете', 5),
  plural3rdPerson: Word('лубенеют', 5),
  masculinePast: Word('лубенел', 5),
  femininePast: Word('лубенела', 5),
  neuterPast: Word('лубенело', 5),
  pluralPast: Word('лубенели', 5),
  imperativeInformal: Word('лубеней', 5),
  imperativeFormal: Word('лубенейте', 5),
  imperfect: [],
};

perfectVerbs.set(лубенеть.name.text, лубенеть);

export { лубенеть };