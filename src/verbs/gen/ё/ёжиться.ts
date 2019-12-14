import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ёжиться: PerfectVerb = {
  name: Word('ёжиться', 0),
  singular1stPerson: Word('ёжусь', 0),
  singular2ndPerson: Word('ёжишься', 0),
  singular3rdPerson: Word('ёжится', 0),
  plural1stPerson: Word('ёжимся', 0),
  plural2ndPerson: Word('ёжитесь', 0),
  plural3rdPerson: Word('ёжатся', 0),
  masculinePast: Word('ёжился', 0),
  femininePast: Word('ёжилась', 0),
  neuterPast: Word('ёжилось', 0),
  pluralPast: Word('ёжились', 0),
  imperativeInformal: Word('ёжься', 0),
  imperativeFormal: Word('ёжьтесь', 0),
  imperfect: [],
};

perfectVerbs.set(ёжиться.name.text, ёжиться);

export { ёжиться };