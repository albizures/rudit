import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухудшиться: PerfectVerb = {
  name: Word('ухудшиться', 2),
  singular1stPerson: Word('ухудшусь', 2),
  singular2ndPerson: Word('ухудшишься', 2),
  singular3rdPerson: Word('ухудшится', 2),
  plural1stPerson: Word('ухудшимся', 2),
  plural2ndPerson: Word('ухудшитесь', 2),
  plural3rdPerson: Word('ухудшатся', 2),
  masculinePast: Word('ухудшился', 2),
  femininePast: Word('ухудшилась', 2),
  neuterPast: Word('ухудшилось', 2),
  pluralPast: Word('ухудшились', 2),
  imperativeInformal: Word('ухудшись', 2),
  imperativeFormal: Word('ухудшитесь', 2),
  imperfect: ['ухудшаться'],
};

perfectVerbs.set(ухудшиться.name.text, ухудшиться);

export { ухудшиться };