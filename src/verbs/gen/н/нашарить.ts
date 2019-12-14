import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашарить: PerfectVerb = {
  name: Word('нашарить', 3),
  singular1stPerson: Word('нашарю', 3),
  singular2ndPerson: Word('нашаришь', 3),
  singular3rdPerson: Word('нашарит', 3),
  plural1stPerson: Word('нашарим', 3),
  plural2ndPerson: Word('нашарите', 3),
  plural3rdPerson: Word('нашарят', 3),
  masculinePast: Word('нашарил', 3),
  femininePast: Word('нашарила', 3),
  neuterPast: Word('нашарило', 3),
  pluralPast: Word('нашарили', 3),
  imperativeInformal: Word('нашарь', 3),
  imperativeFormal: Word('нашарьте', 3),
  imperfect: [],
};

perfectVerbs.set(нашарить.name.text, нашарить);

export { нашарить };