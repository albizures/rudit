import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёжиться: PerfectVerb = {
  name: Word('ёжиться', 2),
  singular1stPerson: Word('ёжусь', 2),
  singular2ndPerson: Word('ёжишься', 2),
  singular3rdPerson: Word('ёжится', 2),
  plural1stPerson: Word('ёжимся', 2),
  plural2ndPerson: Word('ёжитесь', 4),
  plural3rdPerson: Word('ёжатся', 2),
  masculinePast: Word('ёжился', 2),
  femininePast: Word('ёжилась', 4),
  neuterPast: Word('ёжилось', 2),
  pluralPast: Word('ёжились', 2),
  imperativeInformal: Word('ёжься', 4),
  imperativeFormal: Word('ёжьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ёжиться.name.text, ёжиться);

export { ёжиться };