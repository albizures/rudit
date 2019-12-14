import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклиниться: PerfectVerb = {
  name: Word('вклиниться', 3),
  singular1stPerson: Word('вклинюсь', 3),
  singular2ndPerson: Word('вклинишься', 3),
  singular3rdPerson: Word('вклинится', 3),
  plural1stPerson: Word('вклинимся', 3),
  plural2ndPerson: Word('вклинитесь', 3),
  plural3rdPerson: Word('вклинятся', 3),
  masculinePast: Word('вклинился', 3),
  femininePast: Word('вклинилась', 3),
  neuterPast: Word('вклинилось', 3),
  pluralPast: Word('вклинились', 3),
  imperativeInformal: Word('вклинься', 3),
  imperativeFormal: Word('вклиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вклиниться.name.text, вклиниться);

export { вклиниться };