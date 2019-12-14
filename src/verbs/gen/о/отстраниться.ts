import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстраниться: PerfectVerb = {
  name: Word('отстраниться', 7),
  singular1stPerson: Word('отстранюсь', 7),
  singular2ndPerson: Word('отстранишься', 7),
  singular3rdPerson: Word('отстранится', 7),
  plural1stPerson: Word('отстранимся', 7),
  plural2ndPerson: Word('отстранитесь', 7),
  plural3rdPerson: Word('отстранятся', 7),
  masculinePast: Word('отстранился', 7),
  femininePast: Word('отстранилась', 7),
  neuterPast: Word('отстранилось', 7),
  pluralPast: Word('отстранились', 7),
  imperativeInformal: Word('отстранись', 7),
  imperativeFormal: Word('отстранитесь', 7),
  imperfect: [],
};

perfectVerbs.set(отстраниться.name.text, отстраниться);

export { отстраниться };