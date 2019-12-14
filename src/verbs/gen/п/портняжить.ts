import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const портняжить: PerfectVerb = {
  name: Word('портняжить', 5),
  singular1stPerson: Word('портняжу', 5),
  singular2ndPerson: Word('портняжишь', 5),
  singular3rdPerson: Word('портняжит', 5),
  plural1stPerson: Word('портняжим', 5),
  plural2ndPerson: Word('портняжите', 5),
  plural3rdPerson: Word('портняжат', 5),
  masculinePast: Word('портняжил', 5),
  femininePast: Word('портняжила', 5),
  neuterPast: Word('портняжило', 5),
  pluralPast: Word('портняжили', 5),
  imperativeInformal: Word('портняжь', 5),
  imperativeFormal: Word('портняжьте', 5),
  imperfect: [],
};

perfectVerbs.set(портняжить.name.text, портняжить);

export { портняжить };