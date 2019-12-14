import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съёжиться: PerfectVerb = {
  name: Word('съёжиться', 4),
  singular1stPerson: Word('съёжусь', 4),
  singular2ndPerson: Word('съёжишься', 4),
  singular3rdPerson: Word('съёжится', 4),
  plural1stPerson: Word('съёжимся', 4),
  plural2ndPerson: Word('съёжитесь', 6),
  plural3rdPerson: Word('съёжатся', 4),
  masculinePast: Word('съёжился', 4),
  femininePast: Word('съёжилась', 6),
  neuterPast: Word('съёжилось', 4),
  pluralPast: Word('съёжились', 4),
  imperativeInformal: Word('съёжься', 6),
  imperativeFormal: Word('съёжьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(съёжиться.name.text, съёжиться);

export { съёжиться };