import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продолжиться: PerfectVerb = {
  name: Word('продолжиться', 4),
  singular1stPerson: Word('продолжусь', 4),
  singular2ndPerson: Word('продолжишься', 4),
  singular3rdPerson: Word('продолжится', 4),
  plural1stPerson: Word('продолжимся', 4),
  plural2ndPerson: Word('продолжитесь', 4),
  plural3rdPerson: Word('продолжатся', 4),
  masculinePast: Word('продолжился', 4),
  femininePast: Word('продолжилась', 4),
  neuterPast: Word('продолжилось', 4),
  pluralPast: Word('продолжились', 4),
  imperativeInformal: Word('продолжись', 4),
  imperativeFormal: Word('продолжитесь', 4),
  imperfect: ['продолжаться'],
};

perfectVerbs.set(продолжиться.name.text, продолжиться);

export { продолжиться };