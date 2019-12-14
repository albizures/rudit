import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отворить: PerfectVerb = {
  name: Word('отворить', 5),
  singular1stPerson: Word('отворю', 5),
  singular2ndPerson: Word('отворишь', 5),
  singular3rdPerson: Word('отворит', 5),
  plural1stPerson: Word('отворим', 5),
  plural2ndPerson: Word('отворите', 5),
  plural3rdPerson: Word('отворят', 5),
  masculinePast: Word('отворил', 5),
  femininePast: Word('отворила', 5),
  neuterPast: Word('отворило', 5),
  pluralPast: Word('отворили', 5),
  imperativeInformal: Word('отвори', 5),
  imperativeFormal: Word('отворите', 5),
  imperfect: [],
};

perfectVerbs.set(отворить.name.text, отворить);

export { отворить };