import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поторопиться: PerfectVerb = {
  name: Word('поторопиться', 7),
  singular1stPerson: Word('потороплюсь', 8),
  singular2ndPerson: Word('поторопишься', 5),
  singular3rdPerson: Word('поторопится', 5),
  plural1stPerson: Word('поторопимся', 5),
  plural2ndPerson: Word('поторопитесь', 5),
  plural3rdPerson: Word('поторопятся', 5),
  masculinePast: Word('поторопился', 7),
  femininePast: Word('поторопилась', 7),
  neuterPast: Word('поторопилось', 7),
  pluralPast: Word('поторопились', 7),
  imperativeInformal: Word('поторопись', 7),
  imperativeFormal: Word('поторопитесь', 7),
  imperfect: ['торопиться'],
};

perfectVerbs.set(поторопиться.name.text, поторопиться);

export { поторопиться };