import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удивиться: PerfectVerb = {
  name: Word('удивиться', 4),
  singular1stPerson: Word('удивлюсь', 5),
  singular2ndPerson: Word('удивишься', 4),
  singular3rdPerson: Word('удивится', 4),
  plural1stPerson: Word('удивимся', 4),
  plural2ndPerson: Word('удивитесь', 4),
  plural3rdPerson: Word('удивятся', 4),
  masculinePast: Word('удивился', 4),
  femininePast: Word('удивилась', 4),
  neuterPast: Word('удивилось', 4),
  pluralPast: Word('удивились', 4),
  imperativeInformal: Word('удивись', 4),
  imperativeFormal: Word('удивитесь', 4),
  imperfect: ['удивляться'],
};

perfectVerbs.set(удивиться.name.text, удивиться);

export { удивиться };