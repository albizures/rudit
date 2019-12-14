import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встретиться: PerfectVerb = {
  name: Word('встретиться', 4),
  singular1stPerson: Word('встречусь', 4),
  singular2ndPerson: Word('встретишься', 4),
  singular3rdPerson: Word('встретится', 4),
  plural1stPerson: Word('встретимся', 4),
  plural2ndPerson: Word('встретитесь', 4),
  plural3rdPerson: Word('встретятся', 4),
  masculinePast: Word('встретился', 4),
  femininePast: Word('встретилась', 4),
  neuterPast: Word('встретилось', 4),
  pluralPast: Word('встретились', 4),
  imperativeInformal: Word('встреться', 4),
  imperativeFormal: Word('встретьтесь', 4),
  imperfect: ['встречаться'],
};

perfectVerbs.set(встретиться.name.text, встретиться);

export { встретиться };