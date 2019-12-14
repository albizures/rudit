import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разобидеться: PerfectVerb = {
  name: Word('разобидеться', 5),
  singular1stPerson: Word('разобижусь', 5),
  singular2ndPerson: Word('разобидишься', 5),
  singular3rdPerson: Word('разобидится', 5),
  plural1stPerson: Word('разобидимся', 5),
  plural2ndPerson: Word('разобидитесь', 5),
  plural3rdPerson: Word('разобидятся', 5),
  masculinePast: Word('разобиделся', 5),
  femininePast: Word('разобиделась', 5),
  neuterPast: Word('разобиделось', 5),
  pluralPast: Word('разобиделись', 5),
  imperativeInformal: Word('разобидься', 5),
  imperativeFormal: Word('разобидьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(разобидеться.name.text, разобидеться);

export { разобидеться };