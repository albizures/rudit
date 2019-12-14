import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блудить: PerfectVerb = {
  name: Word('блудить', 4),
  singular1stPerson: Word('блужу', 4),
  singular2ndPerson: Word('блудишь', 2),
  singular3rdPerson: Word('блудит', 2),
  plural1stPerson: Word('блудим', 2),
  plural2ndPerson: Word('блудите', 2),
  plural3rdPerson: Word('блудят', 2),
  masculinePast: Word('блудил', 4),
  femininePast: Word('блудила', 4),
  neuterPast: Word('блудило', 4),
  pluralPast: Word('блудили', 4),
  imperativeInformal: Word('блуди', 4),
  imperativeFormal: Word('блудите', 4),
  imperfect: [],
};

perfectVerbs.set(блудить.name.text, блудить);

export { блудить };