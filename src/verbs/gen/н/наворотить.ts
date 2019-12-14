import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наворотить: PerfectVerb = {
  name: Word('наворотить', 7),
  singular1stPerson: Word('наворочу', 7),
  singular2ndPerson: Word('наворотишь', 5),
  singular3rdPerson: Word('наворотит', 5),
  plural1stPerson: Word('наворотим', 5),
  plural2ndPerson: Word('наворотите', 5),
  plural3rdPerson: Word('наворотят', 5),
  masculinePast: Word('наворотил', 7),
  femininePast: Word('наворотила', 7),
  neuterPast: Word('наворотило', 7),
  pluralPast: Word('наворотили', 7),
  imperativeInformal: Word('навороти', 7),
  imperativeFormal: Word('наворотите', 7),
  imperfect: [],
};

perfectVerbs.set(наворотить.name.text, наворотить);

export { наворотить };