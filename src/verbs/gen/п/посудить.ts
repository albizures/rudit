import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посудить: PerfectVerb = {
  name: Word('посудить', 5),
  singular1stPerson: Word('посужу', 5),
  singular2ndPerson: Word('посудишь', 3),
  singular3rdPerson: Word('посудит', 3),
  plural1stPerson: Word('посудим', 3),
  plural2ndPerson: Word('посудите', 3),
  plural3rdPerson: Word('посудят', 3),
  masculinePast: Word('посудил', 5),
  femininePast: Word('посудила', 5),
  neuterPast: Word('посудило', 5),
  pluralPast: Word('посудили', 5),
  imperativeInformal: Word('посуди', 5),
  imperativeFormal: Word('посудите', 5),
  imperfect: [],
};

perfectVerbs.set(посудить.name.text, посудить);

export { посудить };