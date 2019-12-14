import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const знакомиться: PerfectVerb = {
  name: Word('знакомиться', 4),
  singular1stPerson: Word('знакомлюсь', 4),
  singular2ndPerson: Word('знакомишься', 4),
  singular3rdPerson: Word('знакомится', 4),
  plural1stPerson: Word('знакомимся', 4),
  plural2ndPerson: Word('знакомитесь', 4),
  plural3rdPerson: Word('знакомятся', 4),
  masculinePast: Word('знакомился', 4),
  femininePast: Word('знакомилась', 4),
  neuterPast: Word('знакомилось', 4),
  pluralPast: Word('знакомились', 4),
  imperativeInformal: Word('знакомься', 4),
  imperativeFormal: Word('знакомьтесь', 4),
  imperfect: ['познакомиться'],
};

perfectVerbs.set(знакомиться.name.text, знакомиться);

export { знакомиться };