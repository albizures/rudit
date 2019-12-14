import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кочевряжиться: PerfectVerb = {
  name: Word('кочевряжиться', 6),
  singular1stPerson: Word('кочевряжусь', 6),
  singular2ndPerson: Word('кочевряжишься', 6),
  singular3rdPerson: Word('кочевряжится', 6),
  plural1stPerson: Word('кочевряжимся', 6),
  plural2ndPerson: Word('кочевряжитесь', 6),
  plural3rdPerson: Word('кочевряжатся', 6),
  masculinePast: Word('кочевряжился', 6),
  femininePast: Word('кочевряжилась', 6),
  neuterPast: Word('кочевряжилось', 6),
  pluralPast: Word('кочевряжились', 6),
  imperativeInformal: Word('кочевряжься', 6),
  imperativeFormal: Word('кочевряжьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(кочевряжиться.name.text, кочевряжиться);

export { кочевряжиться };