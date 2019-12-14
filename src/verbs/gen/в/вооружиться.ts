import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вооружиться: PerfectVerb = {
  name: Word('вооружиться', 6),
  singular1stPerson: Word('вооружусь', 6),
  singular2ndPerson: Word('вооружишься', 6),
  singular3rdPerson: Word('вооружится', 6),
  plural1stPerson: Word('вооружимся', 6),
  plural2ndPerson: Word('вооружитесь', 6),
  plural3rdPerson: Word('вооружатся', 6),
  masculinePast: Word('вооружился', 6),
  femininePast: Word('вооружилась', 6),
  neuterPast: Word('вооружилось', 6),
  pluralPast: Word('вооружились', 6),
  imperativeInformal: Word('вооружись', 6),
  imperativeFormal: Word('вооружитесь', 6),
  imperfect: ['вооружаться'],
};

perfectVerbs.set(вооружиться.name.text, вооружиться);

export { вооружиться };