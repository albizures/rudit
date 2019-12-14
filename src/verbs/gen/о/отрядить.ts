import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрядить: PerfectVerb = {
  name: Word('отрядить', 5),
  singular1stPerson: Word('отряжу', 5),
  singular2ndPerson: Word('отрядишь', 5),
  singular3rdPerson: Word('отрядит', 5),
  plural1stPerson: Word('отрядим', 5),
  plural2ndPerson: Word('отрядите', 5),
  plural3rdPerson: Word('отрядят', 5),
  masculinePast: Word('отрядил', 5),
  femininePast: Word('отрядила', 5),
  neuterPast: Word('отрядило', 5),
  pluralPast: Word('отрядили', 5),
  imperativeInformal: Word('отряди', 5),
  imperativeFormal: Word('отрядите', 5),
  imperfect: ['отряжать'],
};

perfectVerbs.set(отрядить.name.text, отрядить);

export { отрядить };