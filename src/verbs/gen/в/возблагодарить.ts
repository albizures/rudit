import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возблагодарить: PerfectVerb = {
  name: Word('возблагодарить', 11),
  singular1stPerson: Word('возблагодарю', 11),
  singular2ndPerson: Word('возблагодаришь', 11),
  singular3rdPerson: Word('возблагодарит', 11),
  plural1stPerson: Word('возблагодарим', 11),
  plural2ndPerson: Word('возблагодарите', 11),
  plural3rdPerson: Word('возблагодарят', 11),
  masculinePast: Word('возблагодарил', 11),
  femininePast: Word('возблагодарила', 11),
  neuterPast: Word('возблагодарило', 11),
  pluralPast: Word('возблагодарили', 11),
  imperativeInformal: Word('возблагодари', 11),
  imperativeFormal: Word('возблагодарите', 11),
  imperfect: [],
};

perfectVerbs.set(возблагодарить.name.text, возблагодарить);

export { возблагодарить };