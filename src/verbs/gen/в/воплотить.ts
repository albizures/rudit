import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воплотить: PerfectVerb = {
  name: Word('воплотить', 6),
  singular1stPerson: Word('воплощу', 6),
  singular2ndPerson: Word('воплотишь', 6),
  singular3rdPerson: Word('воплотит', 6),
  plural1stPerson: Word('воплотим', 6),
  plural2ndPerson: Word('воплотите', 6),
  plural3rdPerson: Word('воплотят', 6),
  masculinePast: Word('воплотил', 6),
  femininePast: Word('воплотила', 6),
  neuterPast: Word('воплотило', 6),
  pluralPast: Word('воплотили', 6),
  imperativeInformal: Word('воплоти', 6),
  imperativeFormal: Word('воплотите', 6),
  imperfect: [],
};

perfectVerbs.set(воплотить.name.text, воплотить);

export { воплотить };