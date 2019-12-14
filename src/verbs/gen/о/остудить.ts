import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остудить: PerfectVerb = {
  name: Word('остудить', 5),
  singular1stPerson: Word('остужу', 5),
  singular2ndPerson: Word('остудишь', 3),
  singular3rdPerson: Word('остудит', 3),
  plural1stPerson: Word('остудим', 3),
  plural2ndPerson: Word('остудите', 3),
  plural3rdPerson: Word('остудят', 3),
  masculinePast: Word('остудил', 5),
  femininePast: Word('остудила', 5),
  neuterPast: Word('остудило', 5),
  pluralPast: Word('остудили', 5),
  imperativeInformal: Word('остуди', 5),
  imperativeFormal: Word('остудите', 5),
  imperfect: [],
};

perfectVerbs.set(остудить.name.text, остудить);

export { остудить };