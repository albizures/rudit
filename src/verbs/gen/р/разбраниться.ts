import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбраниться: PerfectVerb = {
  name: Word('разбраниться', 7),
  singular1stPerson: Word('разбранюсь', 7),
  singular2ndPerson: Word('разбранишься', 7),
  singular3rdPerson: Word('разбранится', 7),
  plural1stPerson: Word('разбранимся', 7),
  plural2ndPerson: Word('разбранитесь', 7),
  plural3rdPerson: Word('разбранятся', 7),
  masculinePast: Word('разбранился', 7),
  femininePast: Word('разбранилась', 7),
  neuterPast: Word('разбранилось', 7),
  pluralPast: Word('разбранились', 7),
  imperativeInformal: Word('разбранись', 7),
  imperativeFormal: Word('разбранитесь', 7),
  imperfect: [],
};

perfectVerbs.set(разбраниться.name.text, разбраниться);

export { разбраниться };