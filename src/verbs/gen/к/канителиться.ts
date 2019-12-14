import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const канителиться: PerfectVerb = {
  name: Word('канителиться', 5),
  singular1stPerson: Word('канителюсь', 5),
  singular2ndPerson: Word('канителишься', 5),
  singular3rdPerson: Word('канителится', 5),
  plural1stPerson: Word('канителимся', 5),
  plural2ndPerson: Word('канителитесь', 5),
  plural3rdPerson: Word('канителятся', 5),
  masculinePast: Word('канителился', 5),
  femininePast: Word('канителилась', 5),
  neuterPast: Word('канителилось', 5),
  pluralPast: Word('канителились', 5),
  imperativeInformal: Word('канителься', 5),
  imperativeFormal: Word('канительтесь', 5),
  imperfect: [],
};

perfectVerbs.set(канителиться.name.text, канителиться);

export { канителиться };