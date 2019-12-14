import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инвентаризовать: PerfectVerb = {
  name: Word('инвентаризовать', 12),
  singular1stPerson: Word('инвентаризую', 10),
  singular2ndPerson: Word('инвентаризуешь', 10),
  singular3rdPerson: Word('инвентаризует', 10),
  plural1stPerson: Word('инвентаризуем', 10),
  plural2ndPerson: Word('инвентаризуете', 10),
  plural3rdPerson: Word('инвентаризуют', 10),
  masculinePast: Word('инвентаризовал', 12),
  femininePast: Word('инвентаризовала', 12),
  neuterPast: Word('инвентаризовало', 12),
  pluralPast: Word('инвентаризовали', 12),
  imperativeInformal: Word('инвентаризуй', 10),
  imperativeFormal: Word('инвентаризуйте', 10),
  imperfect: [],
};

perfectVerbs.set(инвентаризовать.name.text, инвентаризовать);

export { инвентаризовать };