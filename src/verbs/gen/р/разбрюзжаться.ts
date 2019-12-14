import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбрюзжаться: PerfectVerb = {
  name: Word('разбрюзжаться', 8),
  singular1stPerson: Word('разбрюзжусь', 8),
  singular2ndPerson: Word('разбрюзжишься', 8),
  singular3rdPerson: Word('разбрюзжится', 8),
  plural1stPerson: Word('разбрюзжимся', 8),
  plural2ndPerson: Word('разбрюзжитесь', 8),
  plural3rdPerson: Word('разбрюзжатся', 8),
  masculinePast: Word('разбрюзжался', 8),
  femininePast: Word('разбрюзжалась', 8),
  neuterPast: Word('разбрюзжалось', 8),
  pluralPast: Word('разбрюзжались', 8),
  imperativeInformal: Word('разбрюзжись', 8),
  imperativeFormal: Word('разбрюзжитесь', 8),
  imperfect: [],
};

perfectVerbs.set(разбрюзжаться.name.text, разбрюзжаться);

export { разбрюзжаться };