import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окаймить: PerfectVerb = {
  name: Word('окаймить', 5),
  singular1stPerson: Word('окаймлю', 6),
  singular2ndPerson: Word('окаймишь', 5),
  singular3rdPerson: Word('окаймит', 5),
  plural1stPerson: Word('окаймим', 5),
  plural2ndPerson: Word('окаймите', 5),
  plural3rdPerson: Word('окаймят', 5),
  masculinePast: Word('окаймил', 5),
  femininePast: Word('окаймила', 5),
  neuterPast: Word('окаймило', 5),
  pluralPast: Word('окаймили', 5),
  imperativeInformal: Word('окайми', 5),
  imperativeFormal: Word('окаймите', 5),
  imperfect: [],
};

perfectVerbs.set(окаймить.name.text, окаймить);

export { окаймить };