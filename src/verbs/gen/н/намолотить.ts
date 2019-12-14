import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намолотить: PerfectVerb = {
  name: Word('намолотить', 7),
  singular1stPerson: Word('намолочу', 7),
  singular2ndPerson: Word('намолотишь', 5),
  singular3rdPerson: Word('намолотит', 5),
  plural1stPerson: Word('намолотим', 5),
  plural2ndPerson: Word('намолотите', 5),
  plural3rdPerson: Word('намолотят', 5),
  masculinePast: Word('намолотил', 7),
  femininePast: Word('намолотила', 7),
  neuterPast: Word('намолотило', 7),
  pluralPast: Word('намолотили', 7),
  imperativeInformal: Word('намолоти', 7),
  imperativeFormal: Word('намолотите', 7),
  imperfect: [],
};

perfectVerbs.set(намолотить.name.text, намолотить);

export { намолотить };