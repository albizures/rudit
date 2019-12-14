import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const износиться: PerfectVerb = {
  name: Word('износиться', 5),
  singular1stPerson: Word('изношусь', 5),
  singular2ndPerson: Word('износишься', 3),
  singular3rdPerson: Word('износится', 3),
  plural1stPerson: Word('износимся', 3),
  plural2ndPerson: Word('износитесь', 3),
  plural3rdPerson: Word('износятся', 3),
  masculinePast: Word('износился', 5),
  femininePast: Word('износилась', 5),
  neuterPast: Word('износилось', 5),
  pluralPast: Word('износились', 5),
  imperativeInformal: Word('износись', 5),
  imperativeFormal: Word('износитесь', 5),
  imperfect: [],
};

perfectVerbs.set(износиться.name.text, износиться);

export { износиться };