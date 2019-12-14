import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бычиться: PerfectVerb = {
  name: Word('бычиться', 3),
  singular1stPerson: Word('бычусь', 3),
  singular2ndPerson: Word('бычишься', 3),
  singular3rdPerson: Word('бычится', 3),
  plural1stPerson: Word('бычимся', 3),
  plural2ndPerson: Word('бычитесь', 3),
  plural3rdPerson: Word('бычатся', 3),
  masculinePast: Word('бычился', 3),
  femininePast: Word('бычилась', 3),
  neuterPast: Word('бычилось', 3),
  pluralPast: Word('бычились', 3),
  imperativeInformal: Word('бычись', 3),
  imperativeFormal: Word('бычитесь', 3),
  imperfect: [],
};

perfectVerbs.set(бычиться.name.text, бычиться);

export { бычиться };