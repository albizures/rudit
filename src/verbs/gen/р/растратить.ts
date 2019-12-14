import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растратить: PerfectVerb = {
  name: Word('растратить', 5),
  singular1stPerson: Word('растрачу', 5),
  singular2ndPerson: Word('растратишь', 5),
  singular3rdPerson: Word('растратит', 5),
  plural1stPerson: Word('растратим', 5),
  plural2ndPerson: Word('растратите', 5),
  plural3rdPerson: Word('растратят', 5),
  masculinePast: Word('растратил', 5),
  femininePast: Word('растратила', 5),
  neuterPast: Word('растратило', 5),
  pluralPast: Word('растратили', 5),
  imperativeInformal: Word('растрать', 5),
  imperativeFormal: Word('растратьте', 5),
  imperfect: [],
};

perfectVerbs.set(растратить.name.text, растратить);

export { растратить };