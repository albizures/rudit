import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вразумить: PerfectVerb = {
  name: Word('вразумить', 6),
  singular1stPerson: Word('вразумлю', 7),
  singular2ndPerson: Word('вразумишь', 6),
  singular3rdPerson: Word('вразумит', 6),
  plural1stPerson: Word('вразумим', 6),
  plural2ndPerson: Word('вразумите', 6),
  plural3rdPerson: Word('вразумят', 6),
  masculinePast: Word('вразумил', 6),
  femininePast: Word('вразумила', 6),
  neuterPast: Word('вразумило', 6),
  pluralPast: Word('вразумили', 6),
  imperativeInformal: Word('вразуми', 6),
  imperativeFormal: Word('вразумите', 6),
  imperfect: [],
};

perfectVerbs.set(вразумить.name.text, вразумить);

export { вразумить };