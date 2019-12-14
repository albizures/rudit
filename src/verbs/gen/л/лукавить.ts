import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лукавить: PerfectVerb = {
  name: Word('лукавить', 3),
  singular1stPerson: Word('лукавлю', 3),
  singular2ndPerson: Word('лукавишь', 3),
  singular3rdPerson: Word('лукавит', 3),
  plural1stPerson: Word('лукавим', 3),
  plural2ndPerson: Word('лукавите', 3),
  plural3rdPerson: Word('лукавят', 3),
  masculinePast: Word('лукавил', 3),
  femininePast: Word('лукавила', 3),
  neuterPast: Word('лукавило', 3),
  pluralPast: Word('лукавили', 3),
  imperativeInformal: Word('лукавь', 3),
  imperativeFormal: Word('лукавьте', 3),
  imperfect: [],
};

perfectVerbs.set(лукавить.name.text, лукавить);

export { лукавить };