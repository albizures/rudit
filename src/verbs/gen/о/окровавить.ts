import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окровавить: PerfectVerb = {
  name: Word('окровавить', 5),
  singular1stPerson: Word('окровавлю', 5),
  singular2ndPerson: Word('окровавишь', 5),
  singular3rdPerson: Word('окровавит', 5),
  plural1stPerson: Word('окровавим', 5),
  plural2ndPerson: Word('окровавите', 5),
  plural3rdPerson: Word('окровавят', 5),
  masculinePast: Word('окровавил', 5),
  femininePast: Word('окровавила', 5),
  neuterPast: Word('окровавило', 5),
  pluralPast: Word('окровавили', 5),
  imperativeInformal: Word('окровавь', 5),
  imperativeFormal: Word('окровавьте', 5),
  imperfect: [],
};

perfectVerbs.set(окровавить.name.text, окровавить);

export { окровавить };