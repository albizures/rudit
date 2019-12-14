import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молиться: PerfectVerb = {
  name: Word('молиться', 3),
  singular1stPerson: Word('молюсь', 3),
  singular2ndPerson: Word('молишься', 1),
  singular3rdPerson: Word('молится', 1),
  plural1stPerson: Word('молимся', 1),
  plural2ndPerson: Word('молитесь', 1),
  plural3rdPerson: Word('молятся', 1),
  masculinePast: Word('молился', 3),
  femininePast: Word('молилась', 3),
  neuterPast: Word('молилось', 3),
  pluralPast: Word('молились', 3),
  imperativeInformal: Word('молись', 3),
  imperativeFormal: Word('молитесь', 3),
  imperfect: ['помолиться'],
};

perfectVerbs.set(молиться.name.text, молиться);

export { молиться };