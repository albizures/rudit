import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспарить: PerfectVerb = {
  name: Word('воспарить', 6),
  singular1stPerson: Word('воспарю', 6),
  singular2ndPerson: Word('воспаришь', 6),
  singular3rdPerson: Word('воспарит', 6),
  plural1stPerson: Word('воспарим', 6),
  plural2ndPerson: Word('воспарите', 6),
  plural3rdPerson: Word('воспарят', 6),
  masculinePast: Word('воспарил', 6),
  femininePast: Word('воспарила', 6),
  neuterPast: Word('воспарило', 6),
  pluralPast: Word('воспарили', 6),
  imperativeInformal: Word('воспари', 6),
  imperativeFormal: Word('воспарите', 6),
  imperfect: [],
};

perfectVerbs.set(воспарить.name.text, воспарить);

export { воспарить };