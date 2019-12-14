import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окормить: PerfectVerb = {
  name: Word('окормить', 5),
  singular1stPerson: Word('окормлю', 6),
  singular2ndPerson: Word('окормишь', 2),
  singular3rdPerson: Word('окормит', 2),
  plural1stPerson: Word('окормим', 2),
  plural2ndPerson: Word('окормите', 2),
  plural3rdPerson: Word('окормят', 2),
  masculinePast: Word('окормил', 5),
  femininePast: Word('окормила', 5),
  neuterPast: Word('окормило', 5),
  pluralPast: Word('окормили', 5),
  imperativeInformal: Word('окорми', 5),
  imperativeFormal: Word('окормите', 5),
  imperfect: [],
};

perfectVerbs.set(окормить.name.text, окормить);

export { окормить };