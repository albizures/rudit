import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислониться: PerfectVerb = {
  name: Word('прислониться', 7),
  singular1stPerson: Word('прислонюсь', 7),
  singular2ndPerson: Word('прислонишься', 5),
  singular3rdPerson: Word('прислонится', 5),
  plural1stPerson: Word('прислонимся', 5),
  plural2ndPerson: Word('прислонитесь', 5),
  plural3rdPerson: Word('прислонятся', 5),
  masculinePast: Word('прислонился', 7),
  femininePast: Word('прислонилась', 7),
  neuterPast: Word('прислонилось', 7),
  pluralPast: Word('прислонились', 7),
  imperativeInformal: Word('прислонись', 7),
  imperativeFormal: Word('прислонитесь', 7),
  imperfect: [],
};

perfectVerbs.set(прислониться.name.text, прислониться);

export { прислониться };