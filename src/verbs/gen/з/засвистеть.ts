import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засвистеть: PerfectVerb = {
  name: Word('засвистеть', 7),
  singular1stPerson: Word('засвищу', 6),
  singular2ndPerson: Word('засвистишь', 7),
  singular3rdPerson: Word('засвистит', 7),
  plural1stPerson: Word('засвистим', 7),
  plural2ndPerson: Word('засвистите', 7),
  plural3rdPerson: Word('засвистят', 7),
  masculinePast: Word('засвистел', 7),
  femininePast: Word('засвистела', 7),
  neuterPast: Word('засвистело', 7),
  pluralPast: Word('засвистели', 7),
  imperativeInformal: Word('засвисти', 7),
  imperativeFormal: Word('засвистите', 7),
  imperfect: [],
};

perfectVerbs.set(засвистеть.name.text, засвистеть);

export { засвистеть };