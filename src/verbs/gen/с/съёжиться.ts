import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съёжиться: PerfectVerb = {
  name: Word('съёжиться', 2),
  singular1stPerson: Word('съёжусь', 2),
  singular2ndPerson: Word('съёжишься', 2),
  singular3rdPerson: Word('съёжится', 2),
  plural1stPerson: Word('съёжимся', 2),
  plural2ndPerson: Word('съёжитесь', 2),
  plural3rdPerson: Word('съёжатся', 2),
  masculinePast: Word('съёжился', 2),
  femininePast: Word('съёжилась', 2),
  neuterPast: Word('съёжилось', 2),
  pluralPast: Word('съёжились', 2),
  imperativeInformal: Word('съёжься', 2),
  imperativeFormal: Word('съёжьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(съёжиться.name.text, съёжиться);

export { съёжиться };