import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбиться: PerfectVerb = {
  name: Word('сбиться', 2),
  singular1stPerson: Word('собьюсь', 4),
  singular2ndPerson: Word('собьёшься', 1),
  singular3rdPerson: Word('собьётся', 1),
  plural1stPerson: Word('собьёмся', 1),
  plural2ndPerson: Word('собьётесь', 6),
  plural3rdPerson: Word('собьются', 4),
  masculinePast: Word('сбился', 2),
  femininePast: Word('сбилась', 2),
  neuterPast: Word('сбилось', 2),
  pluralPast: Word('сбились', 2),
  imperativeInformal: Word('сбейся', 2),
  imperativeFormal: Word('сбейтесь', 2),
  imperfect: ['сбиваться'],
};

perfectVerbs.set(сбиться.name.text, сбиться);

export { сбиться };