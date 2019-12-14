import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отставить: PerfectVerb = {
  name: Word('отставить', 4),
  singular1stPerson: Word('отставлю', 4),
  singular2ndPerson: Word('отставишь', 4),
  singular3rdPerson: Word('отставит', 4),
  plural1stPerson: Word('отставим', 4),
  plural2ndPerson: Word('отставите', 4),
  plural3rdPerson: Word('отставят', 4),
  masculinePast: Word('отставил', 4),
  femininePast: Word('отставила', 4),
  neuterPast: Word('отставило', 4),
  pluralPast: Word('отставили', 4),
  imperativeInformal: Word('отставь', 4),
  imperativeFormal: Word('отставьте', 4),
  imperfect: [],
};

perfectVerbs.set(отставить.name.text, отставить);

export { отставить };