import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрушиться: PerfectVerb = {
  name: Word('разрушиться', 4),
  singular1stPerson: Word('разрушусь', 4),
  singular2ndPerson: Word('разрушишься', 4),
  singular3rdPerson: Word('разрушится', 4),
  plural1stPerson: Word('разрушимся', 4),
  plural2ndPerson: Word('разрушитесь', 4),
  plural3rdPerson: Word('разрушатся', 4),
  masculinePast: Word('разрушился', 4),
  femininePast: Word('разрушилась', 4),
  neuterPast: Word('разрушилось', 4),
  pluralPast: Word('разрушились', 4),
  imperativeInformal: Word('разрушься', 4),
  imperativeFormal: Word('разрушьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разрушиться.name.text, разрушиться);

export { разрушиться };