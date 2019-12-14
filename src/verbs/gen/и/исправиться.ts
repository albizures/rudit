import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исправиться: PerfectVerb = {
  name: Word('исправиться', 4),
  singular1stPerson: Word('исправлюсь', 4),
  singular2ndPerson: Word('исправишься', 4),
  singular3rdPerson: Word('исправится', 4),
  plural1stPerson: Word('исправимся', 4),
  plural2ndPerson: Word('исправитесь', 4),
  plural3rdPerson: Word('исправятся', 4),
  masculinePast: Word('исправился', 4),
  femininePast: Word('исправилась', 4),
  neuterPast: Word('исправилось', 4),
  pluralPast: Word('исправились', 4),
  imperativeInformal: Word('исправься', 4),
  imperativeFormal: Word('исправьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(исправиться.name.text, исправиться);

export { исправиться };