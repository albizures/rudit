import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торопиться: PerfectVerb = {
  name: Word('торопиться', 5),
  singular1stPerson: Word('тороплюсь', 6),
  singular2ndPerson: Word('торопишься', 3),
  singular3rdPerson: Word('торопится', 3),
  plural1stPerson: Word('торопимся', 3),
  plural2ndPerson: Word('торопитесь', 3),
  plural3rdPerson: Word('торопятся', 3),
  masculinePast: Word('торопился', 5),
  femininePast: Word('торопилась', 5),
  neuterPast: Word('торопилось', 5),
  pluralPast: Word('торопились', 5),
  imperativeInformal: Word('торопись', 5),
  imperativeFormal: Word('торопитесь', 5),
  imperfect: ['поторопиться'],
};

perfectVerbs.set(торопиться.name.text, торопиться);

export { торопиться };