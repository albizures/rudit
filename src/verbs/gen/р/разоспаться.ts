import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоспаться: PerfectVerb = {
  name: Word('разоспаться', 6),
  singular1stPerson: Word('разосплюсь', 7),
  singular2ndPerson: Word('разоспишься', 6),
  singular3rdPerson: Word('разоспится', 6),
  plural1stPerson: Word('разоспимся', 6),
  plural2ndPerson: Word('разоспитесь', 6),
  plural3rdPerson: Word('разоспятся', 6),
  masculinePast: Word('разоспался', 6),
  femininePast: Word('разоспалась', 8),
  neuterPast: Word('разоспалось//разоспало'сь', 6),
  pluralPast: Word('разоспались//разоспали'сь', 6),
  imperativeInformal: Word('разоспись', 6),
  imperativeFormal: Word('разоспитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разоспаться.name.text, разоспаться);

export { разоспаться };