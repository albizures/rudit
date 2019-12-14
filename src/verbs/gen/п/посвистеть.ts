import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвистеть: PerfectVerb = {
  name: Word('посвистеть', 7),
  singular1stPerson: Word('посвищу', 6),
  singular2ndPerson: Word('посвистишь', 7),
  singular3rdPerson: Word('посвистит', 7),
  plural1stPerson: Word('посвистим', 7),
  plural2ndPerson: Word('посвистите', 7),
  plural3rdPerson: Word('посвистят', 7),
  masculinePast: Word('посвистел', 7),
  femininePast: Word('посвистела', 7),
  neuterPast: Word('посвистело', 7),
  pluralPast: Word('посвистели', 7),
  imperativeInformal: Word('посвисти', 7),
  imperativeFormal: Word('посвистите', 7),
  imperfect: [],
};

perfectVerbs.set(посвистеть.name.text, посвистеть);

export { посвистеть };