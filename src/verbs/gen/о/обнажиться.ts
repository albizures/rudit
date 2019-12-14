import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнажиться: PerfectVerb = {
  name: Word('обнажиться', 5),
  singular1stPerson: Word('обнажусь', 5),
  singular2ndPerson: Word('обнажишься', 5),
  singular3rdPerson: Word('обнажится', 5),
  plural1stPerson: Word('обнажимся', 5),
  plural2ndPerson: Word('обнажитесь', 5),
  plural3rdPerson: Word('обнажатся', 5),
  masculinePast: Word('обнажился', 5),
  femininePast: Word('обнажилась', 5),
  neuterPast: Word('обнажилось', 5),
  pluralPast: Word('обнажились', 5),
  imperativeInformal: Word('обнажись', 5),
  imperativeFormal: Word('обнажитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обнажиться.name.text, обнажиться);

export { обнажиться };