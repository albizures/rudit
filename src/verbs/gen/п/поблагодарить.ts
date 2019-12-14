import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поблагодарить: PerfectVerb = {
  name: Word('поблагодарить', 10),
  singular1stPerson: Word('поблагодарю', 10),
  singular2ndPerson: Word('поблагодаришь', 10),
  singular3rdPerson: Word('поблагодарит', 10),
  plural1stPerson: Word('поблагодарим', 10),
  plural2ndPerson: Word('поблагодарите', 10),
  plural3rdPerson: Word('поблагодарят', 10),
  masculinePast: Word('поблагодарил', 10),
  femininePast: Word('поблагодарила', 10),
  neuterPast: Word('поблагодарило', 10),
  pluralPast: Word('поблагодарили', 10),
  imperativeInformal: Word('поблагодари', 10),
  imperativeFormal: Word('поблагодарите', 10),
  imperfect: ['благодарить'],
};

perfectVerbs.set(поблагодарить.name.text, поблагодарить);

export { поблагодарить };