import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекатиться: PerfectVerb = {
  name: Word('перекатиться', 7),
  singular1stPerson: Word('перекачусь', 7),
  singular2ndPerson: Word('перекатишься', 5),
  singular3rdPerson: Word('перекатится', 5),
  plural1stPerson: Word('перекатимся', 5),
  plural2ndPerson: Word('перекатитесь', 5),
  plural3rdPerson: Word('перекатятся', 5),
  masculinePast: Word('перекатился', 7),
  femininePast: Word('перекатилась', 7),
  neuterPast: Word('перекатилось', 7),
  pluralPast: Word('перекатились', 7),
  imperativeInformal: Word('перекатись', 7),
  imperativeFormal: Word('перекатитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перекатиться.name.text, перекатиться);

export { перекатиться };