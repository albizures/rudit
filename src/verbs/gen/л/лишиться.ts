import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лишиться: PerfectVerb = {
  name: Word('лишиться', 3),
  singular1stPerson: Word('лишусь', 3),
  singular2ndPerson: Word('лишишься', 3),
  singular3rdPerson: Word('лишится', 3),
  plural1stPerson: Word('лишимся', 3),
  plural2ndPerson: Word('лишитесь', 3),
  plural3rdPerson: Word('лишатся', 3),
  masculinePast: Word('лишился', 3),
  femininePast: Word('лишилась', 3),
  neuterPast: Word('лишилось', 3),
  pluralPast: Word('лишились', 3),
  imperativeInformal: Word('лишись', 3),
  imperativeFormal: Word('лишитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лишиться.name.text, лишиться);

export { лишиться };