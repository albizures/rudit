import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгрузиться: PerfectVerb = {
  name: Word('разгрузиться', 7),
  singular1stPerson: Word('разгружусь', 7),
  singular2ndPerson: Word('разгрузишься', 5),
  singular3rdPerson: Word('разгрузится', 5),
  plural1stPerson: Word('разгрузимся', 5),
  plural2ndPerson: Word('разгрузитесь', 5),
  plural3rdPerson: Word('разгрузятся', 5),
  masculinePast: Word('разгрузился', 7),
  femininePast: Word('разгрузилась', 7),
  neuterPast: Word('разгрузилось', 7),
  pluralPast: Word('разгрузились', 7),
  imperativeInformal: Word('разгрузись', 7),
  imperativeFormal: Word('разгрузитесь', 7),
  imperfect: [],
};

perfectVerbs.set(разгрузиться.name.text, разгрузиться);

export { разгрузиться };