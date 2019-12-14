import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свидеться: PerfectVerb = {
  name: Word('свидеться', 2),
  singular1stPerson: Word('свижусь', 2),
  singular2ndPerson: Word('свидишься', 2),
  singular3rdPerson: Word('свидится', 2),
  plural1stPerson: Word('свидимся', 2),
  plural2ndPerson: Word('свидитесь', 2),
  plural3rdPerson: Word('свидятся', 2),
  masculinePast: Word('свиделся', 2),
  femininePast: Word('свиделась', 2),
  neuterPast: Word('свиделось', 2),
  pluralPast: Word('свиделись', 2),
  imperativeInformal: Word('свидься', 2),
  imperativeFormal: Word('свидьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свидеться.name.text, свидеться);

export { свидеться };