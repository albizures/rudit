import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захламить: PerfectVerb = {
  name: Word('захламить', 6),
  singular1stPerson: Word('захламлю', 7),
  singular2ndPerson: Word('захламишь', 6),
  singular3rdPerson: Word('захламит', 6),
  plural1stPerson: Word('захламим', 6),
  plural2ndPerson: Word('захламите', 6),
  plural3rdPerson: Word('захламят', 6),
  masculinePast: Word('захламил', 6),
  femininePast: Word('захламила', 6),
  neuterPast: Word('захламило', 6),
  pluralPast: Word('захламили', 6),
  imperativeInformal: Word('захлами', 6),
  imperativeFormal: Word('захламите', 6),
  imperfect: [],
};

perfectVerbs.set(захламить.name.text, захламить);

export { захламить };