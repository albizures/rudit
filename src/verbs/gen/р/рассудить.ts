import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассудить: PerfectVerb = {
  name: Word('рассудить', 6),
  singular1stPerson: Word('рассужу', 6),
  singular2ndPerson: Word('рассудишь', 4),
  singular3rdPerson: Word('рассудит', 4),
  plural1stPerson: Word('рассудим', 4),
  plural2ndPerson: Word('рассудите', 4),
  plural3rdPerson: Word('рассудят', 4),
  masculinePast: Word('рассудил', 6),
  femininePast: Word('рассудила', 6),
  neuterPast: Word('рассудило', 6),
  pluralPast: Word('рассудили', 6),
  imperativeInformal: Word('рассуди', 6),
  imperativeFormal: Word('рассудите', 6),
  imperfect: [],
};

perfectVerbs.set(рассудить.name.text, рассудить);

export { рассудить };