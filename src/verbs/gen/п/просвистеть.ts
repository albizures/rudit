import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просвистеть: PerfectVerb = {
  name: Word('просвистеть', 8),
  singular1stPerson: Word('просвищу', 7),
  singular2ndPerson: Word('просвистишь', 8),
  singular3rdPerson: Word('просвистит', 8),
  plural1stPerson: Word('просвистим', 8),
  plural2ndPerson: Word('просвистите', 8),
  plural3rdPerson: Word('просвистят', 8),
  masculinePast: Word('просвистел', 8),
  femininePast: Word('просвистела', 8),
  neuterPast: Word('просвистело', 8),
  pluralPast: Word('просвистели', 8),
  imperativeInformal: Word('просвисти', 8),
  imperativeFormal: Word('просвистите', 8),
  imperfect: [],
};

perfectVerbs.set(просвистеть.name.text, просвистеть);

export { просвистеть };