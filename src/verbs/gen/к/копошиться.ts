import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копошиться: PerfectVerb = {
  name: Word('копошиться', 5),
  singular1stPerson: Word('копошусь', 5),
  singular2ndPerson: Word('копошишься', 5),
  singular3rdPerson: Word('копошится', 5),
  plural1stPerson: Word('копошимся', 5),
  plural2ndPerson: Word('копошитесь', 5),
  plural3rdPerson: Word('копошатся', 5),
  masculinePast: Word('копошился', 5),
  femininePast: Word('копошилась', 5),
  neuterPast: Word('копошилось', 5),
  pluralPast: Word('копошились', 5),
  imperativeInformal: Word('копошись', 5),
  imperativeFormal: Word('копошитесь', 5),
  imperfect: [],
};

perfectVerbs.set(копошиться.name.text, копошиться);

export { копошиться };