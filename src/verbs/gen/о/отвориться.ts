import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвориться: PerfectVerb = {
  name: Word('отвориться', 5),
  singular1stPerson: Word('отворюсь', 5),
  singular2ndPerson: Word('отворишься', 5),
  singular3rdPerson: Word('отворится', 5),
  plural1stPerson: Word('отворимся', 5),
  plural2ndPerson: Word('отворитесь', 5),
  plural3rdPerson: Word('отворятся', 5),
  masculinePast: Word('отворился', 5),
  femininePast: Word('отворилась', 5),
  neuterPast: Word('отворилось', 5),
  pluralPast: Word('отворились', 5),
  imperativeInformal: Word('отворись', 5),
  imperativeFormal: Word('отворитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отвориться.name.text, отвориться);

export { отвориться };