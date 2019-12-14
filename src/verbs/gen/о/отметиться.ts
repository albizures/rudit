import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отметиться: PerfectVerb = {
  name: Word('отметиться', 3),
  singular1stPerson: Word('отмечусь', 3),
  singular2ndPerson: Word('отметишься', 3),
  singular3rdPerson: Word('отметится', 3),
  plural1stPerson: Word('отметимся', 3),
  plural2ndPerson: Word('отметитесь', 3),
  plural3rdPerson: Word('отметятся', 3),
  masculinePast: Word('отметился', 3),
  femininePast: Word('отметилась', 3),
  neuterPast: Word('отметилось', 3),
  pluralPast: Word('отметились', 3),
  imperativeInformal: Word('отметься', 3),
  imperativeFormal: Word('отметьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отметиться.name.text, отметиться);

export { отметиться };