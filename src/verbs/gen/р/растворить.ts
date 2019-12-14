import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растворить: PerfectVerb = {
  name: Word('растворить', 7),
  singular1stPerson: Word('растворю', 7),
  singular2ndPerson: Word('растворишь', 7),
  singular3rdPerson: Word('растворит', 7),
  plural1stPerson: Word('растворим', 7),
  plural2ndPerson: Word('растворите', 7),
  plural3rdPerson: Word('растворят', 7),
  masculinePast: Word('растворил', 7),
  femininePast: Word('растворила', 7),
  neuterPast: Word('растворило', 7),
  pluralPast: Word('растворили', 7),
  imperativeInformal: Word('раствори', 7),
  imperativeFormal: Word('растворите', 7),
  imperfect: [],
};

perfectVerbs.set(растворить.name.text, растворить);

export { растворить };