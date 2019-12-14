import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продержаться: PerfectVerb = {
  name: Word('продержаться', 7),
  singular1stPerson: Word('продержусь', 7),
  singular2ndPerson: Word('продержишься', 4),
  singular3rdPerson: Word('продержится', 4),
  plural1stPerson: Word('продержимся', 4),
  plural2ndPerson: Word('продержитесь', 4),
  plural3rdPerson: Word('продержатся', 4),
  masculinePast: Word('продержался', 7),
  femininePast: Word('продержалась', 7),
  neuterPast: Word('продержалось', 7),
  pluralPast: Word('продержались', 7),
  imperativeInformal: Word('продержись', 7),
  imperativeFormal: Word('продержитесь', 7),
  imperfect: [],
};

perfectVerbs.set(продержаться.name.text, продержаться);

export { продержаться };