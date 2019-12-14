import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацелиться: PerfectVerb = {
  name: Word('нацелиться', 3),
  singular1stPerson: Word('нацелюсь', 3),
  singular2ndPerson: Word('нацелишься', 3),
  singular3rdPerson: Word('нацелится', 3),
  plural1stPerson: Word('нацелимся', 3),
  plural2ndPerson: Word('нацелитесь', 3),
  plural3rdPerson: Word('нацелятся', 3),
  masculinePast: Word('нацелился', 3),
  femininePast: Word('нацелилась', 3),
  neuterPast: Word('нацелилось', 3),
  pluralPast: Word('нацелились', 3),
  imperativeInformal: Word('нацелься', 3),
  imperativeFormal: Word('нацельтесь', 3),
  imperfect: [],
};

perfectVerbs.set(нацелиться.name.text, нацелиться);

export { нацелиться };