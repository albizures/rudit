import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слукавить: PerfectVerb = {
  name: Word('слукавить', 4),
  singular1stPerson: Word('слукавлю', 4),
  singular2ndPerson: Word('слукавишь', 4),
  singular3rdPerson: Word('слукавит', 4),
  plural1stPerson: Word('слукавим', 4),
  plural2ndPerson: Word('слукавите', 4),
  plural3rdPerson: Word('слукавят', 4),
  masculinePast: Word('слукавил', 4),
  femininePast: Word('слукавила', 4),
  neuterPast: Word('слукавило', 4),
  pluralPast: Word('слукавили', 4),
  imperativeInformal: Word('слукавь', 4),
  imperativeFormal: Word('слукавьте', 4),
  imperfect: [],
};

perfectVerbs.set(слукавить.name.text, слукавить);

export { слукавить };