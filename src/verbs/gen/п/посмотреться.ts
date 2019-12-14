import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посмотреться: PerfectVerb = {
  name: Word('посмотреться', 7),
  singular1stPerson: Word('посмотрюсь', 7),
  singular2ndPerson: Word('посмотришься', 4),
  singular3rdPerson: Word('посмотрится', 4),
  plural1stPerson: Word('посмотримся', 4),
  plural2ndPerson: Word('посмотритесь', 4),
  plural3rdPerson: Word('посмотрятся', 4),
  masculinePast: Word('посмотрелся', 7),
  femininePast: Word('посмотрелась', 7),
  neuterPast: Word('посмотрелось', 7),
  pluralPast: Word('посмотрелись', 7),
  imperativeInformal: Word('посмотрись', 7),
  imperativeFormal: Word('посмотритесь', 7),
  imperfect: [],
};

perfectVerbs.set(посмотреться.name.text, посмотреться);

export { посмотреться };