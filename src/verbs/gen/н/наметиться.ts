import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наметиться: PerfectVerb = {
  name: Word('наметиться', 3),
  singular1stPerson: Word('намечусь', 3),
  singular2ndPerson: Word('наметишься', 3),
  singular3rdPerson: Word('наметится', 3),
  plural1stPerson: Word('наметимся', 3),
  plural2ndPerson: Word('наметитесь', 3),
  plural3rdPerson: Word('наметятся', 3),
  masculinePast: Word('наметился', 3),
  femininePast: Word('наметилась', 3),
  neuterPast: Word('наметилось', 3),
  pluralPast: Word('наметились', 3),
  imperativeInformal: Word('наметься', 3),
  imperativeFormal: Word('наметьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наметиться.name.text, наметиться);

export { наметиться };