import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сторониться: PerfectVerb = {
  name: Word('сторониться', 6),
  singular1stPerson: Word('сторонюсь', 6),
  singular2ndPerson: Word('сторонишься', 6),
  singular3rdPerson: Word('сторонится', 6),
  plural1stPerson: Word('сторонимся', 6),
  plural2ndPerson: Word('сторонитесь', 6),
  plural3rdPerson: Word('сторонятся', 6),
  masculinePast: Word('сторонился', 6),
  femininePast: Word('сторонилась', 6),
  neuterPast: Word('сторонилось', 6),
  pluralPast: Word('сторонились', 6),
  imperativeInformal: Word('сторонись', 6),
  imperativeFormal: Word('сторонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(сторониться.name.text, сторониться);

export { сторониться };