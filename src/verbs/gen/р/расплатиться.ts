import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплатиться: PerfectVerb = {
  name: Word('расплатиться', 7),
  singular1stPerson: Word('расплачусь', 7),
  singular2ndPerson: Word('расплатишься', 7),
  singular3rdPerson: Word('расплатится', 7),
  plural1stPerson: Word('расплатимся', 7),
  plural2ndPerson: Word('расплатитесь', 7),
  plural3rdPerson: Word('расплатятся', 7),
  masculinePast: Word('расплатился', 7),
  femininePast: Word('расплатилась', 7),
  neuterPast: Word('расплатилось', 7),
  pluralPast: Word('расплатились', 7),
  imperativeInformal: Word('расплатись', 7),
  imperativeFormal: Word('расплатитесь', 7),
  imperfect: ['расплачиваться'],
};

perfectVerbs.set(расплатиться.name.text, расплатиться);

export { расплатиться };