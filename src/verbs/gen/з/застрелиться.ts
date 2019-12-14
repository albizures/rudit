import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застрелиться: PerfectVerb = {
  name: Word('застрелиться', 7),
  singular1stPerson: Word('застрелюсь', 7),
  singular2ndPerson: Word('застрелишься', 5),
  singular3rdPerson: Word('застрелится', 5),
  plural1stPerson: Word('застрелимся', 5),
  plural2ndPerson: Word('застрелитесь', 5),
  plural3rdPerson: Word('застрелятся', 5),
  masculinePast: Word('застрелился', 7),
  femininePast: Word('застрелилась', 7),
  neuterPast: Word('застрелилось', 7),
  pluralPast: Word('застрелились', 7),
  imperativeInformal: Word('застрелись', 7),
  imperativeFormal: Word('застрелитесь', 7),
  imperfect: [],
};

perfectVerbs.set(застрелиться.name.text, застрелиться);

export { застрелиться };