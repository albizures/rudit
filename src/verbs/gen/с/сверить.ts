import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверить: PerfectVerb = {
  name: Word('сверить', 2),
  singular1stPerson: Word('сверю', 2),
  singular2ndPerson: Word('сверишь', 2),
  singular3rdPerson: Word('сверит', 2),
  plural1stPerson: Word('сверим', 2),
  plural2ndPerson: Word('сверите', 2),
  plural3rdPerson: Word('сверят', 2),
  masculinePast: Word('сверил', 2),
  femininePast: Word('сверила', 2),
  neuterPast: Word('сверило', 2),
  pluralPast: Word('сверили', 2),
  imperativeInformal: Word('сверь', 2),
  imperativeFormal: Word('сверьте', 2),
  imperfect: [],
};

perfectVerbs.set(сверить.name.text, сверить);

export { сверить };