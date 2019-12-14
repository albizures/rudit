import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вверить: PerfectVerb = {
  name: Word('вверить', 2),
  singular1stPerson: Word('вверю', 2),
  singular2ndPerson: Word('вверишь', 2),
  singular3rdPerson: Word('вверит', 2),
  plural1stPerson: Word('вверим', 2),
  plural2ndPerson: Word('вверите', 2),
  plural3rdPerson: Word('вверят', 2),
  masculinePast: Word('вверил', 2),
  femininePast: Word('вверила', 2),
  neuterPast: Word('вверило', 2),
  pluralPast: Word('вверили', 2),
  imperativeInformal: Word('вверь', 2),
  imperativeFormal: Word('вверьте', 2),
  imperfect: [],
};

perfectVerbs.set(вверить.name.text, вверить);

export { вверить };