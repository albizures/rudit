import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const познакомиться: PerfectVerb = {
  name: Word('познакомиться', 6),
  singular1stPerson: Word('познакомлюсь', 6),
  singular2ndPerson: Word('познакомишься', 6),
  singular3rdPerson: Word('познакомится', 6),
  plural1stPerson: Word('познакомимся', 6),
  plural2ndPerson: Word('познакомитесь', 6),
  plural3rdPerson: Word('познакомятся', 6),
  masculinePast: Word('познакомился', 6),
  femininePast: Word('познакомилась', 6),
  neuterPast: Word('познакомилось', 6),
  pluralPast: Word('познакомились', 6),
  imperativeInformal: Word('познакомься', 6),
  imperativeFormal: Word('познакомьтесь', 6),
  imperfect: ['знакомиться'],
};

perfectVerbs.set(познакомиться.name.text, познакомиться);

export { познакомиться };