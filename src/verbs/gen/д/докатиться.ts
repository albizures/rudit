import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докатиться: PerfectVerb = {
  name: Word('докатиться', 5),
  singular1stPerson: Word('докачусь', 5),
  singular2ndPerson: Word('докатишься', 3),
  singular3rdPerson: Word('докатится', 3),
  plural1stPerson: Word('докатимся', 3),
  plural2ndPerson: Word('докатитесь', 3),
  plural3rdPerson: Word('докатятся', 3),
  masculinePast: Word('докатился', 5),
  femininePast: Word('докатилась', 5),
  neuterPast: Word('докатилось', 5),
  pluralPast: Word('докатились', 5),
  imperativeInformal: Word('докатись', 5),
  imperativeFormal: Word('докатитесь', 5),
  imperfect: [],
};

perfectVerbs.set(докатиться.name.text, докатиться);

export { докатиться };