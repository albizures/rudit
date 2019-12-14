import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промаслить: PerfectVerb = {
  name: Word('промаслить', 4),
  singular1stPerson: Word('промаслю', 4),
  singular2ndPerson: Word('промаслишь', 4),
  singular3rdPerson: Word('промаслит', 4),
  plural1stPerson: Word('промаслим', 4),
  plural2ndPerson: Word('промаслите', 4),
  plural3rdPerson: Word('промаслят', 4),
  masculinePast: Word('промаслил', 4),
  femininePast: Word('промаслила', 4),
  neuterPast: Word('промаслило', 4),
  pluralPast: Word('промаслили', 4),
  imperativeInformal: Word('промасли', 4),
  imperativeFormal: Word('промаслите', 4),
  imperfect: [],
};

perfectVerbs.set(промаслить.name.text, промаслить);

export { промаслить };