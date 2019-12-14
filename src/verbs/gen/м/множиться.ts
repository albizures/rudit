import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const множиться: PerfectVerb = {
  name: Word('множиться', 2),
  singular1stPerson: Word('множусь', 2),
  singular2ndPerson: Word('множишься', 2),
  singular3rdPerson: Word('множится', 2),
  plural1stPerson: Word('множимся', 2),
  plural2ndPerson: Word('множитесь', 2),
  plural3rdPerson: Word('множатся', 2),
  masculinePast: Word('множился', 2),
  femininePast: Word('множилась', 2),
  neuterPast: Word('множилось', 2),
  pluralPast: Word('множились', 2),
  imperativeInformal: Word('множься', 2),
  imperativeFormal: Word('множьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(множиться.name.text, множиться);

export { множиться };