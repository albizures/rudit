import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поёжиться: PerfectVerb = {
  name: Word('поёжиться', 2),
  singular1stPerson: Word('поёжусь', 2),
  singular2ndPerson: Word('поёжишься', 2),
  singular3rdPerson: Word('поёжится', 2),
  plural1stPerson: Word('поёжимся', 2),
  plural2ndPerson: Word('поёжитесь', 2),
  plural3rdPerson: Word('поёжатся', 2),
  masculinePast: Word('поёжился', 2),
  femininePast: Word('поёжилась', 2),
  neuterPast: Word('поёжилось', 2),
  pluralPast: Word('поёжились', 2),
  imperativeInformal: Word('поёжься', 2),
  imperativeFormal: Word('поёжьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(поёжиться.name.text, поёжиться);

export { поёжиться };