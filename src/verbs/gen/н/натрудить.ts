import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натрудить: PerfectVerb = {
  name: Word('натрудить', 6),
  singular1stPerson: Word('натружу', 6),
  singular2ndPerson: Word('натрудишь', 4),
  singular3rdPerson: Word('натрудит', 4),
  plural1stPerson: Word('натрудим', 4),
  plural2ndPerson: Word('натрудите', 4),
  plural3rdPerson: Word('натрудят', 4),
  masculinePast: Word('натрудил', 6),
  femininePast: Word('натрудила', 6),
  neuterPast: Word('натрудило', 6),
  pluralPast: Word('натрудили', 6),
  imperativeInformal: Word('натруди', 6),
  imperativeFormal: Word('натрудите', 6),
  imperfect: [],
};

perfectVerbs.set(натрудить.name.text, натрудить);

export { натрудить };