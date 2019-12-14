import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проглотить: PerfectVerb = {
  name: Word('проглотить', 7),
  singular1stPerson: Word('проглочу', 7),
  singular2ndPerson: Word('проглотишь', 5),
  singular3rdPerson: Word('проглотит', 5),
  plural1stPerson: Word('проглотим', 5),
  plural2ndPerson: Word('проглотите', 5),
  plural3rdPerson: Word('проглотят', 5),
  masculinePast: Word('проглотил', 7),
  femininePast: Word('проглотила', 7),
  neuterPast: Word('проглотило', 7),
  pluralPast: Word('проглотили', 7),
  imperativeInformal: Word('проглоти', 7),
  imperativeFormal: Word('проглотите', 7),
  imperfect: [],
};

perfectVerbs.set(проглотить.name.text, проглотить);

export { проглотить };