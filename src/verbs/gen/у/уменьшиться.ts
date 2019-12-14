import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уменьшиться: PerfectVerb = {
  name: Word('уменьшиться', 2),
  singular1stPerson: Word('уменьшусь', 2),
  singular2ndPerson: Word('уменьшишься', 2),
  singular3rdPerson: Word('уменьшится', 2),
  plural1stPerson: Word('уменьшимся', 2),
  plural2ndPerson: Word('уменьшитесь', 2),
  plural3rdPerson: Word('уменьшатся', 2),
  masculinePast: Word('уменьшился', 2),
  femininePast: Word('уменьшилась', 2),
  neuterPast: Word('уменьшилось', 2),
  pluralPast: Word('уменьшились', 2),
  imperativeInformal: Word('уменьшись', 2),
  imperativeFormal: Word('уменьшитесь', 2),
  imperfect: ['уменьшаться'],
};

perfectVerbs.set(уменьшиться.name.text, уменьшиться);

export { уменьшиться };