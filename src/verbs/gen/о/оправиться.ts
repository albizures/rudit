import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправиться: PerfectVerb = {
  name: Word('оправиться', 3),
  singular1stPerson: Word('оправлюсь', 3),
  singular2ndPerson: Word('оправишься', 3),
  singular3rdPerson: Word('оправится', 3),
  plural1stPerson: Word('оправимся', 3),
  plural2ndPerson: Word('оправитесь', 3),
  plural3rdPerson: Word('оправятся', 3),
  masculinePast: Word('оправился', 3),
  femininePast: Word('оправилась', 3),
  neuterPast: Word('оправилось', 3),
  pluralPast: Word('оправились', 3),
  imperativeInformal: Word('оправься', 3),
  imperativeFormal: Word('оправьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(оправиться.name.text, оправиться);

export { оправиться };