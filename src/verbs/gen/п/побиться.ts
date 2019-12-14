import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побиться: PerfectVerb = {
  name: Word('побиться', 3),
  singular1stPerson: Word('побьюсь', 4),
  singular2ndPerson: Word('побьёшься', 4),
  singular3rdPerson: Word('побьётся', 4),
  plural1stPerson: Word('побьёмся', 4),
  plural2ndPerson: Word('побьётесь', 4),
  plural3rdPerson: Word('побьются', 4),
  masculinePast: Word('побился', 3),
  femininePast: Word('побилась', 3),
  neuterPast: Word('побилось', 3),
  pluralPast: Word('побились', 3),
  imperativeInformal: Word('побейся', 3),
  imperativeFormal: Word('побейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(побиться.name.text, побиться);

export { побиться };