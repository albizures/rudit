import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отважиться: PerfectVerb = {
  name: Word('отважиться', 3),
  singular1stPerson: Word('отважусь', 3),
  singular2ndPerson: Word('отважишься', 3),
  singular3rdPerson: Word('отважится', 3),
  plural1stPerson: Word('отважимся', 3),
  plural2ndPerson: Word('отважитесь', 3),
  plural3rdPerson: Word('отважатся', 3),
  masculinePast: Word('отважился', 3),
  femininePast: Word('отважилась', 3),
  neuterPast: Word('отважилось', 3),
  pluralPast: Word('отважились', 3),
  imperativeInformal: Word('отважься', 3),
  imperativeFormal: Word('отважьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отважиться.name.text, отважиться);

export { отважиться };