import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отблагодарить: PerfectVerb = {
  name: Word('отблагодарить', 10),
  singular1stPerson: Word('отблагодарю', 10),
  singular2ndPerson: Word('отблагодаришь', 10),
  singular3rdPerson: Word('отблагодарит', 10),
  plural1stPerson: Word('отблагодарим', 10),
  plural2ndPerson: Word('отблагодарите', 10),
  plural3rdPerson: Word('отблагодарят', 10),
  masculinePast: Word('отблагодарил', 10),
  femininePast: Word('отблагодарила', 10),
  neuterPast: Word('отблагодарило', 10),
  pluralPast: Word('отблагодарили', 10),
  imperativeInformal: Word('отблагодари', 10),
  imperativeFormal: Word('отблагодарите', 10),
  imperfect: [],
};

perfectVerbs.set(отблагодарить.name.text, отблагодарить);

export { отблагодарить };