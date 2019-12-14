import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опозорить: PerfectVerb = {
  name: Word('опозорить', 4),
  singular1stPerson: Word('опозорю', 4),
  singular2ndPerson: Word('опозоришь', 4),
  singular3rdPerson: Word('опозорит', 4),
  plural1stPerson: Word('опозорим', 4),
  plural2ndPerson: Word('опозорите', 4),
  plural3rdPerson: Word('опозорят', 4),
  masculinePast: Word('опозорил', 4),
  femininePast: Word('опозорила', 4),
  neuterPast: Word('опозорило', 4),
  pluralPast: Word('опозорили', 4),
  imperativeInformal: Word('опозорь', 4),
  imperativeFormal: Word('опозорьте', 4),
  imperfect: [],
};

perfectVerbs.set(опозорить.name.text, опозорить);

export { опозорить };