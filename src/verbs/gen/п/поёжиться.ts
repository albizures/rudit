import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поёжиться: PerfectVerb = {
  name: Word('поёжиться', 4),
  singular1stPerson: Word('поёжусь', 1),
  singular2ndPerson: Word('поёжишься', 4),
  singular3rdPerson: Word('поёжится', 4),
  plural1stPerson: Word('поёжимся', 4),
  plural2ndPerson: Word('поёжитесь', 6),
  plural3rdPerson: Word('поёжатся', 4),
  masculinePast: Word('поёжился', 4),
  femininePast: Word('поёжилась', 6),
  neuterPast: Word('поёжилось', 4),
  pluralPast: Word('поёжились', 4),
  imperativeInformal: Word('поёжься', 1),
  imperativeFormal: Word('поёжьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поёжиться.name.text, поёжиться);

export { поёжиться };