import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацелить: PerfectVerb = {
  name: Word('нацелить', 3),
  singular1stPerson: Word('нацелю', 3),
  singular2ndPerson: Word('нацелишь', 3),
  singular3rdPerson: Word('нацелит', 3),
  plural1stPerson: Word('нацелим', 3),
  plural2ndPerson: Word('нацелите', 3),
  plural3rdPerson: Word('нацелят', 3),
  masculinePast: Word('нацелил', 3),
  femininePast: Word('нацелила', 3),
  neuterPast: Word('нацелило', 3),
  pluralPast: Word('нацелили', 3),
  imperativeInformal: Word('нацель', 3),
  imperativeFormal: Word('нацельте', 3),
  imperfect: [],
};

perfectVerbs.set(нацелить.name.text, нацелить);

export { нацелить };