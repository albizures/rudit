import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задержаться: PerfectVerb = {
  name: Word('задержаться', 6),
  singular1stPerson: Word('задержусь', 6),
  singular2ndPerson: Word('задержишься', 3),
  singular3rdPerson: Word('задержится', 3),
  plural1stPerson: Word('задержимся', 3),
  plural2ndPerson: Word('задержитесь', 3),
  plural3rdPerson: Word('задержатся', 3),
  masculinePast: Word('задержался', 6),
  femininePast: Word('задержалась', 6),
  neuterPast: Word('задержалось', 6),
  pluralPast: Word('задержались', 6),
  imperativeInformal: Word('задержись', 6),
  imperativeFormal: Word('задержитесь', 6),
  imperfect: [],
};

perfectVerbs.set(задержаться.name.text, задержаться);

export { задержаться };