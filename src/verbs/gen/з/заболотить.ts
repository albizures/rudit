import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболотить: PerfectVerb = {
  name: Word('заболотить', 5),
  singular1stPerson: Word('заболочу', 5),
  singular2ndPerson: Word('заболотишь', 5),
  singular3rdPerson: Word('заболотит', 5),
  plural1stPerson: Word('заболотим', 5),
  plural2ndPerson: Word('заболотите', 5),
  plural3rdPerson: Word('заболотят', 5),
  masculinePast: Word('заболотил', 5),
  femininePast: Word('заболотила', 5),
  neuterPast: Word('заболотило', 5),
  pluralPast: Word('заболотили', 5),
  imperativeInformal: Word('заболоть', 5),
  imperativeFormal: Word('заболотьте', 5),
  imperfect: [],
};

perfectVerbs.set(заболотить.name.text, заболотить);

export { заболотить };