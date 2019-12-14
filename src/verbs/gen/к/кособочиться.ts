import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кособочиться: PerfectVerb = {
  name: Word('кособочиться', 5),
  singular1stPerson: Word('кособочусь', 5),
  singular2ndPerson: Word('кособочишься', 5),
  singular3rdPerson: Word('кособочится', 5),
  plural1stPerson: Word('кособочимся', 5),
  plural2ndPerson: Word('кособочитесь', 5),
  plural3rdPerson: Word('кособочатся', 5),
  masculinePast: Word('кособочился', 5),
  femininePast: Word('кособочилась', 5),
  neuterPast: Word('кособочилось', 5),
  pluralPast: Word('кособочились', 5),
  imperativeInformal: Word('кособочься', 5),
  imperativeFormal: Word('кособочьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(кособочиться.name.text, кособочиться);

export { кособочиться };