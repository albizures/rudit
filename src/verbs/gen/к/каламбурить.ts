import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const каламбурить: PerfectVerb = {
  name: Word('каламбурить', 6),
  singular1stPerson: Word('каламбурю', 6),
  singular2ndPerson: Word('каламбуришь', 6),
  singular3rdPerson: Word('каламбурит', 6),
  plural1stPerson: Word('каламбурим', 6),
  plural2ndPerson: Word('каламбурите', 6),
  plural3rdPerson: Word('каламбурят', 6),
  masculinePast: Word('каламбурил', 6),
  femininePast: Word('каламбурила', 6),
  neuterPast: Word('каламбурило', 6),
  pluralPast: Word('каламбурили', 6),
  imperativeInformal: Word('каламбурь', 6),
  imperativeFormal: Word('каламбурьте', 6),
  imperfect: [],
};

perfectVerbs.set(каламбурить.name.text, каламбурить);

export { каламбурить };