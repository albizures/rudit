import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застудить: PerfectVerb = {
  name: Word('застудить', 6),
  singular1stPerson: Word('застужу', 6),
  singular2ndPerson: Word('застудишь', 4),
  singular3rdPerson: Word('застудит', 4),
  plural1stPerson: Word('застудим', 4),
  plural2ndPerson: Word('застудите', 4),
  plural3rdPerson: Word('застудят', 4),
  masculinePast: Word('застудил', 6),
  femininePast: Word('застудила', 6),
  neuterPast: Word('застудило', 6),
  pluralPast: Word('застудили', 6),
  imperativeInformal: Word('застуди', 6),
  imperativeFormal: Word('застудите', 6),
  imperfect: [],
};

perfectVerbs.set(застудить.name.text, застудить);

export { застудить };