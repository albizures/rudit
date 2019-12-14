import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засочиться: PerfectVerb = {
  name: Word('засочиться', 5),
  singular1stPerson: Word('засочусь', 5),
  singular2ndPerson: Word('засочишься', 5),
  singular3rdPerson: Word('засочится', 5),
  plural1stPerson: Word('засочимся', 5),
  plural2ndPerson: Word('засочитесь', 5),
  plural3rdPerson: Word('засочатся', 5),
  masculinePast: Word('засочился', 5),
  femininePast: Word('засочилась', 5),
  neuterPast: Word('засочилось', 5),
  pluralPast: Word('засочились', 5),
  imperativeInformal: Word('засочись', 5),
  imperativeFormal: Word('засочитесь', 5),
  imperfect: [],
};

perfectVerbs.set(засочиться.name.text, засочиться);

export { засочиться };