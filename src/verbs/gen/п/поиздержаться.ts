import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поиздержаться: PerfectVerb = {
  name: Word('поиздержаться', 8),
  singular1stPerson: Word('поиздержусь', 8),
  singular2ndPerson: Word('поиздержишься', 5),
  singular3rdPerson: Word('поиздержится', 5),
  plural1stPerson: Word('поиздержимся', 5),
  plural2ndPerson: Word('поиздержитесь', 5),
  plural3rdPerson: Word('поиздержатся', 5),
  masculinePast: Word('поиздержался', 8),
  femininePast: Word('поиздержалась', 8),
  neuterPast: Word('поиздержалось', 8),
  pluralPast: Word('поиздержались', 8),
  imperativeInformal: Word('поиздержись', 8),
  imperativeFormal: Word('поиздержитесь', 8),
  imperfect: [],
};

perfectVerbs.set(поиздержаться.name.text, поиздержаться);

export { поиздержаться };