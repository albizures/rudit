import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привидеться: PerfectVerb = {
  name: Word('привидеться', 4),
  singular1stPerson: Word('привижусь', 4),
  singular2ndPerson: Word('привидишься', 4),
  singular3rdPerson: Word('привидится', 4),
  plural1stPerson: Word('привидимся', 4),
  plural2ndPerson: Word('привидитесь', 4),
  plural3rdPerson: Word('привидятся', 4),
  masculinePast: Word('привиделся', 4),
  femininePast: Word('привиделась', 4),
  neuterPast: Word('привиделось', 4),
  pluralPast: Word('привиделись', 4),
  imperativeInformal: Word('привидься', 4),
  imperativeFormal: Word('привидьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(привидеться.name.text, привидеться);

export { привидеться };