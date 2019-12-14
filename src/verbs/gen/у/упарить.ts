import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упарить: PerfectVerb = {
  name: Word('упарить', 2),
  singular1stPerson: Word('упарю', 2),
  singular2ndPerson: Word('упаришь', 2),
  singular3rdPerson: Word('упарит', 2),
  plural1stPerson: Word('упарим', 2),
  plural2ndPerson: Word('упарите', 2),
  plural3rdPerson: Word('упарят', 2),
  masculinePast: Word('упарил', 2),
  femininePast: Word('упарила', 2),
  neuterPast: Word('упарило', 2),
  pluralPast: Word('упарили', 2),
  imperativeInformal: Word('упарь', 2),
  imperativeFormal: Word('упарьте', 2),
  imperfect: [],
};

perfectVerbs.set(упарить.name.text, упарить);

export { упарить };