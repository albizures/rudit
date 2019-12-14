import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выверить: PerfectVerb = {
  name: Word('выверить', 1),
  singular1stPerson: Word('выверю', 1),
  singular2ndPerson: Word('выверишь', 1),
  singular3rdPerson: Word('выверит', 1),
  plural1stPerson: Word('выверим', 1),
  plural2ndPerson: Word('выверите', 1),
  plural3rdPerson: Word('выверят', 1),
  masculinePast: Word('выверил', 1),
  femininePast: Word('выверила', 1),
  neuterPast: Word('выверило', 1),
  pluralPast: Word('выверили', 1),
  imperativeInformal: Word('вывери//вы'верь', 1),
  imperativeFormal: Word('выверьте', 1),
  imperfect: [],
};

perfectVerbs.set(выверить.name.text, выверить);

export { выверить };