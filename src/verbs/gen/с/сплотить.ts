import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплотить: PerfectVerb = {
  name: Word('сплотить', 5),
  singular1stPerson: Word('сплочу', 5),
  singular2ndPerson: Word('сплотишь', 5),
  singular3rdPerson: Word('сплотит', 5),
  plural1stPerson: Word('сплотим', 5),
  plural2ndPerson: Word('сплотите', 5),
  plural3rdPerson: Word('сплотят', 5),
  masculinePast: Word('сплотил', 5),
  femininePast: Word('сплотила', 5),
  neuterPast: Word('сплотило', 5),
  pluralPast: Word('сплотили', 5),
  imperativeInformal: Word('сплоти', 5),
  imperativeFormal: Word('сплотите', 5),
  imperfect: [],
};

perfectVerbs.set(сплотить.name.text, сплотить);

export { сплотить };