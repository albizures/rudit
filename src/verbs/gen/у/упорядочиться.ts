import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упорядочиться: PerfectVerb = {
  name: Word('упорядочиться', 4),
  singular1stPerson: Word('упорядочусь', 4),
  singular2ndPerson: Word('упорядочишься', 4),
  singular3rdPerson: Word('упорядочится', 4),
  plural1stPerson: Word('упорядочимся', 4),
  plural2ndPerson: Word('упорядочитесь', 4),
  plural3rdPerson: Word('упорядочатся', 4),
  masculinePast: Word('упорядочился', 4),
  femininePast: Word('упорядочилась', 4),
  neuterPast: Word('упорядочилось', 4),
  pluralPast: Word('упорядочились', 4),
  imperativeInformal: Word('упорядочись', 4),
  imperativeFormal: Word('упорядочьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(упорядочиться.name.text, упорядочиться);

export { упорядочиться };