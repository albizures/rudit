import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горбиться: PerfectVerb = {
  name: Word('горбиться', 1),
  singular1stPerson: Word('горблюсь', 1),
  singular2ndPerson: Word('горбишься', 1),
  singular3rdPerson: Word('горбится', 1),
  plural1stPerson: Word('горбимся', 1),
  plural2ndPerson: Word('горбитесь', 1),
  plural3rdPerson: Word('горбятся', 1),
  masculinePast: Word('горбился', 1),
  femininePast: Word('горбилась', 1),
  neuterPast: Word('горбилось', 1),
  pluralPast: Word('горбились', 1),
  imperativeInformal: Word('горбись//го'рбься', 1),
  imperativeFormal: Word('горбитесь//го'рбьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(горбиться.name.text, горбиться);

export { горбиться };