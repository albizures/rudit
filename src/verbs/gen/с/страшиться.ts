import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const страшиться: PerfectVerb = {
  name: Word('страшиться', 5),
  singular1stPerson: Word('страшусь', 5),
  singular2ndPerson: Word('страшишься', 5),
  singular3rdPerson: Word('страшится', 5),
  plural1stPerson: Word('страшимся', 5),
  plural2ndPerson: Word('страшитесь', 5),
  plural3rdPerson: Word('страшатся', 5),
  masculinePast: Word('страшился', 5),
  femininePast: Word('страшилась', 5),
  neuterPast: Word('страшилось', 5),
  pluralPast: Word('страшились', 5),
  imperativeInformal: Word('страшись', 5),
  imperativeFormal: Word('страшитесь', 5),
  imperfect: [],
};

perfectVerbs.set(страшиться.name.text, страшиться);

export { страшиться };