import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрудить: PerfectVerb = {
  name: Word('запрудить', 6),
  singular1stPerson: Word('запружу', 6),
  singular2ndPerson: Word('запрудишь', 4),
  singular3rdPerson: Word('запрудит', 4),
  plural1stPerson: Word('запрудим', 4),
  plural2ndPerson: Word('запрудите', 4),
  plural3rdPerson: Word('запрудят', 4),
  masculinePast: Word('запрудил', 6),
  femininePast: Word('запрудила', 6),
  neuterPast: Word('запрудило', 6),
  pluralPast: Word('запрудили', 6),
  imperativeInformal: Word('запруди', 6),
  imperativeFormal: Word('запрудите', 6),
  imperfect: [],
};

perfectVerbs.set(запрудить.name.text, запрудить);

export { запрудить };