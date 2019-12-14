import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полюбиться: PerfectVerb = {
  name: Word('полюбиться', 5),
  singular1stPerson: Word('полюблюсь', 6),
  singular2ndPerson: Word('полюбишься', 3),
  singular3rdPerson: Word('полюбится', 3),
  plural1stPerson: Word('полюбимся', 3),
  plural2ndPerson: Word('полюбитесь', 3),
  plural3rdPerson: Word('полюбятся', 3),
  masculinePast: Word('полюбился', 5),
  femininePast: Word('полюбилась', 5),
  neuterPast: Word('полюбилось', 5),
  pluralPast: Word('полюбились', 5),
  imperativeInformal: Word('полюбись', 5),
  imperativeFormal: Word('полюбитесь', 5),
  imperfect: [],
};

perfectVerbs.set(полюбиться.name.text, полюбиться);

export { полюбиться };