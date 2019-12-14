import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доверить: PerfectVerb = {
  name: Word('доверить', 3),
  singular1stPerson: Word('доверю', 3),
  singular2ndPerson: Word('доверишь', 3),
  singular3rdPerson: Word('доверит', 3),
  plural1stPerson: Word('доверим', 3),
  plural2ndPerson: Word('доверите', 3),
  plural3rdPerson: Word('доверят', 3),
  masculinePast: Word('доверил', 3),
  femininePast: Word('доверила', 3),
  neuterPast: Word('доверило', 3),
  pluralPast: Word('доверили', 3),
  imperativeInformal: Word('доверь', 3),
  imperativeFormal: Word('доверьте', 3),
  imperfect: [],
};

perfectVerbs.set(доверить.name.text, доверить);

export { доверить };