import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прудить: PerfectVerb = {
  name: Word('прудить', 4),
  singular1stPerson: Word('пружу', 4),
  singular2ndPerson: Word('прудишь', 2),
  singular3rdPerson: Word('прудит', 2),
  plural1stPerson: Word('прудим', 2),
  plural2ndPerson: Word('прудите', 2),
  plural3rdPerson: Word('прудят', 2),
  masculinePast: Word('прудил', 4),
  femininePast: Word('прудила', 4),
  neuterPast: Word('прудило', 4),
  pluralPast: Word('прудили', 4),
  imperativeInformal: Word('пруди', 4),
  imperativeFormal: Word('прудите', 4),
  imperfect: [],
};

perfectVerbs.set(прудить.name.text, прудить);

export { прудить };