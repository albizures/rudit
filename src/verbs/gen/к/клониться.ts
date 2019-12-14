import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клониться: PerfectVerb = {
  name: Word('клониться', 4),
  singular1stPerson: Word('клонюсь', 4),
  singular2ndPerson: Word('клонишься', 2),
  singular3rdPerson: Word('клонится', 2),
  plural1stPerson: Word('клонимся', 2),
  plural2ndPerson: Word('клонитесь', 2),
  plural3rdPerson: Word('клонятся', 2),
  masculinePast: Word('клонился', 4),
  femininePast: Word('клонилась', 4),
  neuterPast: Word('клонилось', 4),
  pluralPast: Word('клонились', 4),
  imperativeInformal: Word('клонись', 4),
  imperativeFormal: Word('клонитесь', 4),
  imperfect: [],
};

perfectVerbs.set(клониться.name.text, клониться);

export { клониться };