import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полакомиться: PerfectVerb = {
  name: Word('полакомиться', 3),
  singular1stPerson: Word('полакомлюсь', 3),
  singular2ndPerson: Word('полакомишься', 3),
  singular3rdPerson: Word('полакомится', 3),
  plural1stPerson: Word('полакомимся', 3),
  plural2ndPerson: Word('полакомитесь', 3),
  plural3rdPerson: Word('полакомятся', 3),
  masculinePast: Word('полакомился', 3),
  femininePast: Word('полакомилась', 3),
  neuterPast: Word('полакомилось', 3),
  pluralPast: Word('полакомились', 3),
  imperativeInformal: Word('полакомись//пола'комься', 3),
  imperativeFormal: Word('полакомьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(полакомиться.name.text, полакомиться);

export { полакомиться };