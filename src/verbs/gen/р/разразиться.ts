import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разразиться: PerfectVerb = {
  name: Word('разразиться', 6),
  singular1stPerson: Word('разражусь', 6),
  singular2ndPerson: Word('разразишься', 6),
  singular3rdPerson: Word('разразится', 6),
  plural1stPerson: Word('разразимся', 6),
  plural2ndPerson: Word('разразитесь', 6),
  plural3rdPerson: Word('разразятся', 6),
  masculinePast: Word('разразился', 6),
  femininePast: Word('разразилась', 6),
  neuterPast: Word('разразилось', 6),
  pluralPast: Word('разразились', 6),
  imperativeInformal: Word('разразись', 6),
  imperativeFormal: Word('разразитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разразиться.name.text, разразиться);

export { разразиться };