import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поправиться: PerfectVerb = {
  name: Word('поправиться', 4),
  singular1stPerson: Word('поправлюсь', 4),
  singular2ndPerson: Word('поправишься', 4),
  singular3rdPerson: Word('поправится', 4),
  plural1stPerson: Word('поправимся', 4),
  plural2ndPerson: Word('поправитесь', 4),
  plural3rdPerson: Word('поправятся', 4),
  masculinePast: Word('поправился', 4),
  femininePast: Word('поправилась', 4),
  neuterPast: Word('поправилось', 4),
  pluralPast: Word('поправились', 4),
  imperativeInformal: Word('поправься', 4),
  imperativeFormal: Word('поправьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поправиться.name.text, поправиться);

export { поправиться };