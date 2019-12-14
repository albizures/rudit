import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ускориться: PerfectVerb = {
  name: Word('ускориться', 3),
  singular1stPerson: Word('ускорюсь', 3),
  singular2ndPerson: Word('ускоришься', 3),
  singular3rdPerson: Word('ускорится', 3),
  plural1stPerson: Word('ускоримся', 3),
  plural2ndPerson: Word('ускоритесь', 3),
  plural3rdPerson: Word('ускорятся', 3),
  masculinePast: Word('ускорился', 3),
  femininePast: Word('ускорилась', 3),
  neuterPast: Word('ускорилось', 3),
  pluralPast: Word('ускорились', 3),
  imperativeInformal: Word('ускорься', 3),
  imperativeFormal: Word('ускорьтесь', 3),
  imperfect: ['ускорять'],
};

perfectVerbs.set(ускориться.name.text, ускориться);

export { ускориться };