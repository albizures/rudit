import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвыситься: PerfectVerb = {
  name: Word('возвыситься', 4),
  singular1stPerson: Word('возвышусь', 4),
  singular2ndPerson: Word('возвысишься', 4),
  singular3rdPerson: Word('возвысится', 4),
  plural1stPerson: Word('возвысимся', 4),
  plural2ndPerson: Word('возвыситесь', 4),
  plural3rdPerson: Word('возвысятся', 4),
  masculinePast: Word('возвысился', 4),
  femininePast: Word('возвысилась', 4),
  neuterPast: Word('возвысилось', 4),
  pluralPast: Word('возвысились', 4),
  imperativeInformal: Word('возвысься', 4),
  imperativeFormal: Word('возвысьтесь', 4),
  imperfect: ['возвышаться'],
};

perfectVerbs.set(возвыситься.name.text, возвыситься);

export { возвыситься };