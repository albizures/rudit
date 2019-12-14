import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осведомиться: PerfectVerb = {
  name: Word('осведомиться', 3),
  singular1stPerson: Word('осведомлюсь', 3),
  singular2ndPerson: Word('осведомишься', 3),
  singular3rdPerson: Word('осведомится', 3),
  plural1stPerson: Word('осведомимся', 3),
  plural2ndPerson: Word('осведомитесь', 3),
  plural3rdPerson: Word('осведомятся', 3),
  masculinePast: Word('осведомился', 3),
  femininePast: Word('осведомилась', 3),
  neuterPast: Word('осведомилось', 3),
  pluralPast: Word('осведомились', 3),
  imperativeInformal: Word('осведомись//осве'домься', 3),
  imperativeFormal: Word('осведомьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(осведомиться.name.text, осведомиться);

export { осведомиться };