import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объявиться: PerfectVerb = {
  name: Word('объявиться', 5),
  singular1stPerson: Word('объявлюсь', 6),
  singular2ndPerson: Word('объявишься', 3),
  singular3rdPerson: Word('объявится', 3),
  plural1stPerson: Word('объявимся', 3),
  plural2ndPerson: Word('объявитесь', 3),
  plural3rdPerson: Word('объявятся', 3),
  masculinePast: Word('объявился', 5),
  femininePast: Word('объявилась', 5),
  neuterPast: Word('объявилось', 5),
  pluralPast: Word('объявились', 5),
  imperativeInformal: Word('объявись', 5),
  imperativeFormal: Word('объявитесь', 5),
  imperfect: [],
};

perfectVerbs.set(объявиться.name.text, объявиться);

export { объявиться };