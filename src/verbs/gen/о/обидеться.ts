import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обидеться: PerfectVerb = {
  name: Word('обидеться', 2),
  singular1stPerson: Word('обижусь', 2),
  singular2ndPerson: Word('обидишься', 2),
  singular3rdPerson: Word('обидится', 2),
  plural1stPerson: Word('обидимся', 2),
  plural2ndPerson: Word('обидитесь', 2),
  plural3rdPerson: Word('обидятся', 2),
  masculinePast: Word('обиделся', 2),
  femininePast: Word('обиделась', 2),
  neuterPast: Word('обиделось', 2),
  pluralPast: Word('обиделись', 2),
  imperativeInformal: Word('обидься', 2),
  imperativeFormal: Word('обидьтесь', 2),
  imperfect: ['обижаться'],
};

perfectVerbs.set(обидеться.name.text, обидеться);

export { обидеться };