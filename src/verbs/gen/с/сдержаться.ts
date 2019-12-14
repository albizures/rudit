import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдержаться: PerfectVerb = {
  name: Word('сдержаться', 5),
  singular1stPerson: Word('сдержусь', 5),
  singular2ndPerson: Word('сдержишься', 2),
  singular3rdPerson: Word('сдержится', 2),
  plural1stPerson: Word('сдержимся', 2),
  plural2ndPerson: Word('сдержитесь', 2),
  plural3rdPerson: Word('сдержатся', 2),
  masculinePast: Word('сдержался', 5),
  femininePast: Word('сдержалась', 5),
  neuterPast: Word('сдержалось', 5),
  pluralPast: Word('сдержались', 5),
  imperativeInformal: Word('сдержись', 5),
  imperativeFormal: Word('сдержитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сдержаться.name.text, сдержаться);

export { сдержаться };