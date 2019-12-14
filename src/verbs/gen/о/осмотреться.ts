import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмотреться: PerfectVerb = {
  name: Word('осмотреться', 6),
  singular1stPerson: Word('осмотрюсь', 6),
  singular2ndPerson: Word('осмотришься', 3),
  singular3rdPerson: Word('осмотрится', 3),
  plural1stPerson: Word('осмотримся', 3),
  plural2ndPerson: Word('осмотритесь', 3),
  plural3rdPerson: Word('осмотрятся', 3),
  masculinePast: Word('осмотрелся', 6),
  femininePast: Word('осмотрелась', 6),
  neuterPast: Word('осмотрелось', 6),
  pluralPast: Word('осмотрелись', 6),
  imperativeInformal: Word('осмотрись', 6),
  imperativeFormal: Word('осмотритесь', 6),
  imperfect: [],
};

perfectVerbs.set(осмотреться.name.text, осмотреться);

export { осмотреться };