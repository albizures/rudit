import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разниться: PerfectVerb = {
  name: Word('разниться', 1),
  singular1stPerson: Word('разнюсь', 1),
  singular2ndPerson: Word('разнишься', 1),
  singular3rdPerson: Word('разнится', 1),
  plural1stPerson: Word('разнимся', 1),
  plural2ndPerson: Word('разнитесь', 1),
  plural3rdPerson: Word('разнятся', 1),
  masculinePast: Word('разнился', 1),
  femininePast: Word('разнилась', 1),
  neuterPast: Word('разнилось', 1),
  pluralPast: Word('разнились', 1),
  imperativeInformal: Word('разнись', 1),
  imperativeFormal: Word('разнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(разниться.name.text, разниться);

export { разниться };