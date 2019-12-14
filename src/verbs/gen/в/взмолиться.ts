import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмолиться: PerfectVerb = {
  name: Word('взмолиться', 5),
  singular1stPerson: Word('взмолюсь', 5),
  singular2ndPerson: Word('взмолишься', 3),
  singular3rdPerson: Word('взмолится', 3),
  plural1stPerson: Word('взмолимся', 3),
  plural2ndPerson: Word('взмолитесь', 3),
  plural3rdPerson: Word('взмолятся', 3),
  masculinePast: Word('взмолился', 5),
  femininePast: Word('взмолилась', 5),
  neuterPast: Word('взмолилось', 5),
  pluralPast: Word('взмолились', 5),
  imperativeInformal: Word('взмолись', 5),
  imperativeFormal: Word('взмолитесь', 5),
  imperfect: [],
};

perfectVerbs.set(взмолиться.name.text, взмолиться);

export { взмолиться };