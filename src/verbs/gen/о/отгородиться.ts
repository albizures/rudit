import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгородиться: PerfectVerb = {
  name: Word('отгородиться', 7),
  singular1stPerson: Word('отгорожусь', 7),
  singular2ndPerson: Word('отгородишься', 5),
  singular3rdPerson: Word('отгородится', 5),
  plural1stPerson: Word('отгородимся', 5),
  plural2ndPerson: Word('отгородитесь', 5),
  plural3rdPerson: Word('отгородятся', 5),
  masculinePast: Word('отгородился', 7),
  femininePast: Word('отгородилась', 7),
  neuterPast: Word('отгородилось', 7),
  pluralPast: Word('отгородились', 7),
  imperativeInformal: Word('отгородись', 7),
  imperativeFormal: Word('отгородитесь', 7),
  imperfect: [],
};

perfectVerbs.set(отгородиться.name.text, отгородиться);

export { отгородиться };