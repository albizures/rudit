import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const славиться: PerfectVerb = {
  name: Word('славиться', 2),
  singular1stPerson: Word('славлюсь', 2),
  singular2ndPerson: Word('славишься', 2),
  singular3rdPerson: Word('славится', 2),
  plural1stPerson: Word('славимся', 2),
  plural2ndPerson: Word('славитесь', 2),
  plural3rdPerson: Word('славятся', 2),
  masculinePast: Word('славился', 2),
  femininePast: Word('славилась', 2),
  neuterPast: Word('славилось', 2),
  pluralPast: Word('славились', 2),
  imperativeInformal: Word('славься', 2),
  imperativeFormal: Word('славьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(славиться.name.text, славиться);

export { славиться };