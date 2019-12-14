import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благодарить: PerfectVerb = {
  name: Word('благодарить', 8),
  singular1stPerson: Word('благодарю', 8),
  singular2ndPerson: Word('благодаришь', 8),
  singular3rdPerson: Word('благодарит', 8),
  plural1stPerson: Word('благодарим', 8),
  plural2ndPerson: Word('благодарите', 8),
  plural3rdPerson: Word('благодарят', 8),
  masculinePast: Word('благодарил', 8),
  femininePast: Word('благодарила', 8),
  neuterPast: Word('благодарило', 8),
  pluralPast: Word('благодарили', 8),
  imperativeInformal: Word('благодари', 8),
  imperativeFormal: Word('благодарите', 8),
  imperfect: ['поблагодарить','отблагодарить'],
};

perfectVerbs.set(благодарить.name.text, благодарить);

export { благодарить };