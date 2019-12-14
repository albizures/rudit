import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заколотить: PerfectVerb = {
  name: Word('заколотить', 7),
  singular1stPerson: Word('заколочу', 7),
  singular2ndPerson: Word('заколотишь', 5),
  singular3rdPerson: Word('заколотит', 5),
  plural1stPerson: Word('заколотим', 5),
  plural2ndPerson: Word('заколотите', 5),
  plural3rdPerson: Word('заколотят', 5),
  masculinePast: Word('заколотил', 7),
  femininePast: Word('заколотила', 7),
  neuterPast: Word('заколотило', 7),
  pluralPast: Word('заколотили', 7),
  imperativeInformal: Word('заколоти', 7),
  imperativeFormal: Word('заколотите', 7),
  imperfect: [],
};

perfectVerbs.set(заколотить.name.text, заколотить);

export { заколотить };