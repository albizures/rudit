import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлечься: PerfectVerb = {
  name: Word('разлечься', 4),
  singular1stPerson: Word('разлягусь', 4),
  singular2ndPerson: Word('разляжешься', 4),
  singular3rdPerson: Word('разляжется', 4),
  plural1stPerson: Word('разляжемся', 4),
  plural2ndPerson: Word('разляжетесь', 4),
  plural3rdPerson: Word('разлягутся', 4),
  masculinePast: Word('разлёгся', 1),
  femininePast: Word('разлеглась', 7),
  neuterPast: Word('разлеглось', 7),
  pluralPast: Word('разлеглись', 7),
  imperativeInformal: Word('разлягся', 4),
  imperativeFormal: Word('разлягтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разлечься.name.text, разлечься);

export { разлечься };