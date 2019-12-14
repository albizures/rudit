import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const решиться: PerfectVerb = {
  name: Word('решиться', 3),
  singular1stPerson: Word('решусь', 3),
  singular2ndPerson: Word('решишься', 3),
  singular3rdPerson: Word('решится', 3),
  plural1stPerson: Word('решимся', 3),
  plural2ndPerson: Word('решитесь', 3),
  plural3rdPerson: Word('решатся', 3),
  masculinePast: Word('решился', 3),
  femininePast: Word('решилась', 3),
  neuterPast: Word('решилось', 3),
  pluralPast: Word('решились', 3),
  imperativeInformal: Word('решись', 3),
  imperativeFormal: Word('решитесь', 3),
  imperfect: ['решаться'],
};

perfectVerbs.set(решиться.name.text, решиться);

export { решиться };