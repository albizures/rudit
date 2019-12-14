import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свистеть: PerfectVerb = {
  name: Word('свистеть', 5),
  singular1stPerson: Word('свищу', 4),
  singular2ndPerson: Word('свистишь', 5),
  singular3rdPerson: Word('свистит', 5),
  plural1stPerson: Word('свистим', 5),
  plural2ndPerson: Word('свистите', 5),
  plural3rdPerson: Word('свистят', 5),
  masculinePast: Word('свистел', 5),
  femininePast: Word('свистела', 5),
  neuterPast: Word('свистело', 5),
  pluralPast: Word('свистели', 5),
  imperativeInformal: Word('свисти', 5),
  imperativeFormal: Word('свистите', 5),
  imperfect: ['свистнуть'],
};

perfectVerbs.set(свистеть.name.text, свистеть);

export { свистеть };