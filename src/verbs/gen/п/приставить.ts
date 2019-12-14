import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приставить: PerfectVerb = {
  name: Word('приставить', 5),
  singular1stPerson: Word('приставлю', 5),
  singular2ndPerson: Word('приставишь', 5),
  singular3rdPerson: Word('приставит', 5),
  plural1stPerson: Word('приставим', 5),
  plural2ndPerson: Word('приставите', 5),
  plural3rdPerson: Word('приставят', 5),
  masculinePast: Word('приставил', 5),
  femininePast: Word('приставила', 5),
  neuterPast: Word('приставило', 5),
  pluralPast: Word('приставили', 5),
  imperativeInformal: Word('приставь', 5),
  imperativeFormal: Word('приставьте', 5),
  imperfect: [],
};

perfectVerbs.set(приставить.name.text, приставить);

export { приставить };