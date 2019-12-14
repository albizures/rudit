import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подержаться: PerfectVerb = {
  name: Word('подержаться', 6),
  singular1stPerson: Word('подержусь', 6),
  singular2ndPerson: Word('подержишься', 3),
  singular3rdPerson: Word('подержится', 3),
  plural1stPerson: Word('подержимся', 3),
  plural2ndPerson: Word('подержитесь', 3),
  plural3rdPerson: Word('подержатся', 3),
  masculinePast: Word('подержался', 6),
  femininePast: Word('подержалась', 6),
  neuterPast: Word('подержалось', 6),
  pluralPast: Word('подержались', 6),
  imperativeInformal: Word('подержись', 6),
  imperativeFormal: Word('подержитесь', 6),
  imperfect: [],
};

perfectVerbs.set(подержаться.name.text, подержаться);

export { подержаться };