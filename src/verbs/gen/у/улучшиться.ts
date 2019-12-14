import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улучшиться: PerfectVerb = {
  name: Word('улучшиться', 2),
  singular1stPerson: Word('улучшусь', 2),
  singular2ndPerson: Word('улучшишься', 2),
  singular3rdPerson: Word('улучшится', 2),
  plural1stPerson: Word('улучшимся', 2),
  plural2ndPerson: Word('улучшитесь', 2),
  plural3rdPerson: Word('улучшатся', 2),
  masculinePast: Word('улучшился', 2),
  femininePast: Word('улучшилась', 2),
  neuterPast: Word('улучшилось', 2),
  pluralPast: Word('улучшились', 2),
  imperativeInformal: Word('улучшись', 2),
  imperativeFormal: Word('улучшитесь', 2),
  imperfect: ['улучшаться'],
};

perfectVerbs.set(улучшиться.name.text, улучшиться);

export { улучшиться };