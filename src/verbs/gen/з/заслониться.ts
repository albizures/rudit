import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслониться: PerfectVerb = {
  name: Word('заслониться', 6),
  singular1stPerson: Word('заслонюсь', 6),
  singular2ndPerson: Word('заслонишься', 6),
  singular3rdPerson: Word('заслонится', 6),
  plural1stPerson: Word('заслонимся', 6),
  plural2ndPerson: Word('заслонитесь', 6),
  plural3rdPerson: Word('заслонятся', 6),
  masculinePast: Word('заслонился', 6),
  femininePast: Word('заслонилась', 6),
  neuterPast: Word('заслонилось', 6),
  pluralPast: Word('заслонились', 6),
  imperativeInformal: Word('заслонись', 6),
  imperativeFormal: Word('заслонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(заслониться.name.text, заслониться);

export { заслониться };