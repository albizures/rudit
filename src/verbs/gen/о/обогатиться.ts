import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогатиться: PerfectVerb = {
  name: Word('обогатиться', 6),
  singular1stPerson: Word('обогащусь', 6),
  singular2ndPerson: Word('обогатишься', 6),
  singular3rdPerson: Word('обогатится', 6),
  plural1stPerson: Word('обогатимся', 6),
  plural2ndPerson: Word('обогатитесь', 6),
  plural3rdPerson: Word('обогатятся', 6),
  masculinePast: Word('обогатился', 6),
  femininePast: Word('обогатилась', 6),
  neuterPast: Word('обогатилось', 6),
  pluralPast: Word('обогатились', 6),
  imperativeInformal: Word('обогатись', 6),
  imperativeFormal: Word('обогатитесь', 6),
  imperfect: [],
};

perfectVerbs.set(обогатиться.name.text, обогатиться);

export { обогатиться };