import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осудить: PerfectVerb = {
  name: Word('осудить', 4),
  singular1stPerson: Word('осужу', 4),
  singular2ndPerson: Word('осудишь', 2),
  singular3rdPerson: Word('осудит', 2),
  plural1stPerson: Word('осудим', 2),
  plural2ndPerson: Word('осудите', 2),
  plural3rdPerson: Word('осудят', 2),
  masculinePast: Word('осудил', 4),
  femininePast: Word('осудила', 4),
  neuterPast: Word('осудило', 4),
  pluralPast: Word('осудили', 4),
  imperativeInformal: Word('осуди', 4),
  imperativeFormal: Word('осудите', 4),
  imperfect: ['осуждать'],
};

perfectVerbs.set(осудить.name.text, осудить);

export { осудить };