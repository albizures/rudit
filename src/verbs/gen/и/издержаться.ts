import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издержаться: PerfectVerb = {
  name: Word('издержаться', 6),
  singular1stPerson: Word('издержусь', 6),
  singular2ndPerson: Word('издержишься', 3),
  singular3rdPerson: Word('издержится', 3),
  plural1stPerson: Word('издержимся', 3),
  plural2ndPerson: Word('издержитесь', 3),
  plural3rdPerson: Word('издержатся', 3),
  masculinePast: Word('издержался', 6),
  femininePast: Word('издержалась', 6),
  neuterPast: Word('издержалось', 6),
  pluralPast: Word('издержались', 6),
  imperativeInformal: Word('издержись', 6),
  imperativeFormal: Word('издержитесь', 6),
  imperfect: [],
};

perfectVerbs.set(издержаться.name.text, издержаться);

export { издержаться };