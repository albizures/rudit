import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const найтовить: PerfectVerb = {
  name: Word('найтовить', 4),
  singular1stPerson: Word('найтовлю', 4),
  singular2ndPerson: Word('найтовишь', 4),
  singular3rdPerson: Word('найтовит', 4),
  plural1stPerson: Word('найтовим', 4),
  plural2ndPerson: Word('найтовите', 4),
  plural3rdPerson: Word('найтовят', 4),
  masculinePast: Word('найтовил', 4),
  femininePast: Word('найтовила', 4),
  neuterPast: Word('найтовило', 4),
  pluralPast: Word('найтовили', 4),
  imperativeInformal: Word('найтовь', 4),
  imperativeFormal: Word('найтовьте', 4),
  imperfect: [],
};

perfectVerbs.set(найтовить.name.text, найтовить);

export { найтовить };