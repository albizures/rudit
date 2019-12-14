import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лакомиться: PerfectVerb = {
  name: Word('лакомиться', 1),
  singular1stPerson: Word('лакомлюсь', 1),
  singular2ndPerson: Word('лакомишься', 1),
  singular3rdPerson: Word('лакомится', 1),
  plural1stPerson: Word('лакомимся', 1),
  plural2ndPerson: Word('лакомитесь', 1),
  plural3rdPerson: Word('лакомятся', 1),
  masculinePast: Word('лакомился', 1),
  femininePast: Word('лакомилась', 1),
  neuterPast: Word('лакомилось', 1),
  pluralPast: Word('лакомились', 1),
  imperativeInformal: Word('лакомись//ла'комься', 1),
  imperativeFormal: Word('лакомьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(лакомиться.name.text, лакомиться);

export { лакомиться };