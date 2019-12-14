import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покатиться: PerfectVerb = {
  name: Word('покатиться', 5),
  singular1stPerson: Word('покачусь', 5),
  singular2ndPerson: Word('покатишься', 3),
  singular3rdPerson: Word('покатится', 3),
  plural1stPerson: Word('покатимся', 3),
  plural2ndPerson: Word('покатитесь', 3),
  plural3rdPerson: Word('покатятся', 3),
  masculinePast: Word('покатился', 5),
  femininePast: Word('покатилась', 5),
  neuterPast: Word('покатилось', 5),
  pluralPast: Word('покатились', 5),
  imperativeInformal: Word('покатись', 5),
  imperativeFormal: Word('покатитесь', 5),
  imperfect: [],
};

perfectVerbs.set(покатиться.name.text, покатиться);

export { покатиться };