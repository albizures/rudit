import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крючиться: PerfectVerb = {
  name: Word('крючиться', 2),
  singular1stPerson: Word('крючусь', 2),
  singular2ndPerson: Word('крючишься', 2),
  singular3rdPerson: Word('крючится', 2),
  plural1stPerson: Word('крючимся', 2),
  plural2ndPerson: Word('крючитесь', 2),
  plural3rdPerson: Word('крючатся', 2),
  masculinePast: Word('крючился', 2),
  femininePast: Word('крючилась', 2),
  neuterPast: Word('крючилось', 2),
  pluralPast: Word('крючились', 2),
  imperativeInformal: Word('крючься', 2),
  imperativeFormal: Word('крючьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(крючиться.name.text, крючиться);

export { крючиться };