import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смотреться: PerfectVerb = {
  name: Word('смотреться', 5),
  singular1stPerson: Word('смотрюсь', 5),
  singular2ndPerson: Word('смотришься', 2),
  singular3rdPerson: Word('смотрится', 2),
  plural1stPerson: Word('смотримся', 2),
  plural2ndPerson: Word('смотритесь', 2),
  plural3rdPerson: Word('смотрятся', 2),
  masculinePast: Word('смотрелся', 5),
  femininePast: Word('смотрелась', 5),
  neuterPast: Word('смотрелось', 5),
  pluralPast: Word('смотрелись', 5),
  imperativeInformal: Word('смотрись', 5),
  imperativeFormal: Word('смотритесь', 5),
  imperfect: [],
};

perfectVerbs.set(смотреться.name.text, смотреться);

export { смотреться };