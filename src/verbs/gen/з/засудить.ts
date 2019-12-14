import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засудить: PerfectVerb = {
  name: Word('засудить', 5),
  singular1stPerson: Word('засужу', 5),
  singular2ndPerson: Word('засудишь', 3),
  singular3rdPerson: Word('засудит', 3),
  plural1stPerson: Word('засудим', 3),
  plural2ndPerson: Word('засудите', 3),
  plural3rdPerson: Word('засудят', 3),
  masculinePast: Word('засудил', 5),
  femininePast: Word('засудила', 5),
  neuterPast: Word('засудило', 5),
  pluralPast: Word('засудили', 5),
  imperativeInformal: Word('засуди', 5),
  imperativeFormal: Word('засудите', 5),
  imperfect: [],
};

perfectVerbs.set(засудить.name.text, засудить);

export { засудить };