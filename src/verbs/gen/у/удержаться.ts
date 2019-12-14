import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удержаться: PerfectVerb = {
  name: Word('удержаться', 5),
  singular1stPerson: Word('удержусь', 5),
  singular2ndPerson: Word('удержишься', 2),
  singular3rdPerson: Word('удержится', 2),
  plural1stPerson: Word('удержимся', 2),
  plural2ndPerson: Word('удержитесь', 2),
  plural3rdPerson: Word('удержатся', 2),
  masculinePast: Word('удержался', 5),
  femininePast: Word('удержалась', 5),
  neuterPast: Word('удержалось', 5),
  pluralPast: Word('удержались', 5),
  imperativeInformal: Word('удержись', 5),
  imperativeFormal: Word('удержитесь', 5),
  imperfect: [],
};

perfectVerbs.set(удержаться.name.text, удержаться);

export { удержаться };