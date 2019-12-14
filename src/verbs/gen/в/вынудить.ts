import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынудить: PerfectVerb = {
  name: Word('вынудить', 1),
  singular1stPerson: Word('вынужу', 1),
  singular2ndPerson: Word('вынудишь', 1),
  singular3rdPerson: Word('вынудит', 1),
  plural1stPerson: Word('вынудим', 1),
  plural2ndPerson: Word('вынудите', 1),
  plural3rdPerson: Word('вынудят', 1),
  masculinePast: Word('вынудил', 1),
  femininePast: Word('вынудила', 1),
  neuterPast: Word('вынудило', 1),
  pluralPast: Word('вынудили', 1),
  imperativeInformal: Word('вынуди', 1),
  imperativeFormal: Word('вынудите', 1),
  imperfect: ['вынуждать'],
};

perfectVerbs.set(вынудить.name.text, вынудить);

export { вынудить };