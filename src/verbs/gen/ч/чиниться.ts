import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чиниться: PerfectVerb = {
  name: Word('чиниться', 3),
  singular1stPerson: Word('чинюсь', 3),
  singular2ndPerson: Word('чинишься', 1),
  singular3rdPerson: Word('чинится', 1),
  plural1stPerson: Word('чинимся', 1),
  plural2ndPerson: Word('чинитесь', 1),
  plural3rdPerson: Word('чинятся', 1),
  masculinePast: Word('чинился', 3),
  femininePast: Word('чинилась', 3),
  neuterPast: Word('чинилось', 3),
  pluralPast: Word('чинились', 3),
  imperativeInformal: Word('чинись', 3),
  imperativeFormal: Word('чинитесь', 3),
  imperfect: [],
};

perfectVerbs.set(чиниться.name.text, чиниться);

export { чиниться };