import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпарить: PerfectVerb = {
  name: Word('выпарить', 1),
  singular1stPerson: Word('выпарю', 1),
  singular2ndPerson: Word('выпаришь', 1),
  singular3rdPerson: Word('выпарит', 1),
  plural1stPerson: Word('выпарим', 1),
  plural2ndPerson: Word('выпарите', 1),
  plural3rdPerson: Word('выпарят', 1),
  masculinePast: Word('выпарил', 1),
  femininePast: Word('выпарила', 1),
  neuterPast: Word('выпарило', 1),
  pluralPast: Word('выпарили', 1),
  imperativeInformal: Word('выпари', 1),
  imperativeFormal: Word('выпарьте', 1),
  imperfect: [],
};

perfectVerbs.set(выпарить.name.text, выпарить);

export { выпарить };