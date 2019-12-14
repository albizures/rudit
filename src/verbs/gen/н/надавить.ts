import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надавить: PerfectVerb = {
  name: Word('надавить', 5),
  singular1stPerson: Word('надавлю', 6),
  singular2ndPerson: Word('надавишь', 3),
  singular3rdPerson: Word('надавит', 3),
  plural1stPerson: Word('надавим', 3),
  plural2ndPerson: Word('надавите', 3),
  plural3rdPerson: Word('надавят', 3),
  masculinePast: Word('надавил', 5),
  femininePast: Word('надавила', 5),
  neuterPast: Word('надавило', 5),
  pluralPast: Word('надавили', 5),
  imperativeInformal: Word('надави', 5),
  imperativeFormal: Word('надавите', 5),
  imperfect: [],
};

perfectVerbs.set(надавить.name.text, надавить);

export { надавить };