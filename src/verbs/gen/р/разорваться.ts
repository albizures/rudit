import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разорваться: PerfectVerb = {
  name: Word('разорваться', 6),
  singular1stPerson: Word('разорвусь', 6),
  singular2ndPerson: Word('разорвёшься', 1),
  singular3rdPerson: Word('разорвётся', 1),
  plural1stPerson: Word('разорвёмся', 1),
  plural2ndPerson: Word('разорвётесь', 1),
  plural3rdPerson: Word('разорвутся', 6),
  masculinePast: Word('разорвался', 6),
  femininePast: Word('разорвалась', 8),
  neuterPast: Word('разорвалось//разорвало'сь', 6),
  pluralPast: Word('разорвались//разорвали'сь', 6),
  imperativeInformal: Word('разорвись', 6),
  imperativeFormal: Word('разорвитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разорваться.name.text, разорваться);

export { разорваться };