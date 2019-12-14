import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вабить: PerfectVerb = {
  name: Word('вабить', 1),
  singular1stPerson: Word('ваблю', 1),
  singular2ndPerson: Word('вабишь', 1),
  singular3rdPerson: Word('вабит', 1),
  plural1stPerson: Word('вабим', 1),
  plural2ndPerson: Word('вабите', 1),
  plural3rdPerson: Word('вабят', 1),
  masculinePast: Word('вабил', 1),
  femininePast: Word('вабила', 1),
  neuterPast: Word('вабило', 1),
  pluralPast: Word('вабили', 1),
  imperativeInformal: Word('вабь', 1),
  imperativeFormal: Word('вабьте', 1),
  imperfect: [],
};

perfectVerbs.set(вабить.name.text, вабить);

export { вабить };