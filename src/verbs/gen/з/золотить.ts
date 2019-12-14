import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const золотить: PerfectVerb = {
  name: Word('золотить', 5),
  singular1stPerson: Word('золочу', 5),
  singular2ndPerson: Word('золотишь', 5),
  singular3rdPerson: Word('золотит', 5),
  plural1stPerson: Word('золотим', 5),
  plural2ndPerson: Word('золотите', 5),
  plural3rdPerson: Word('золотят', 5),
  masculinePast: Word('золотил', 5),
  femininePast: Word('золотила', 5),
  neuterPast: Word('золотило', 5),
  pluralPast: Word('золотили', 5),
  imperativeInformal: Word('золоти', 5),
  imperativeFormal: Word('золотите', 5),
  imperfect: [],
};

perfectVerbs.set(золотить.name.text, золотить);

export { золотить };