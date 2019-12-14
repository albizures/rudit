import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дурить: PerfectVerb = {
  name: Word('дурить', 3),
  singular1stPerson: Word('дурю', 3),
  singular2ndPerson: Word('дуришь', 3),
  singular3rdPerson: Word('дурит', 3),
  plural1stPerson: Word('дурим', 3),
  plural2ndPerson: Word('дурите', 3),
  plural3rdPerson: Word('дурят', 3),
  masculinePast: Word('дурил', 3),
  femininePast: Word('дурила', 3),
  neuterPast: Word('дурило', 3),
  pluralPast: Word('дурили', 3),
  imperativeInformal: Word('дури', 3),
  imperativeFormal: Word('дурите', 3),
  imperfect: [],
};

perfectVerbs.set(дурить.name.text, дурить);

export { дурить };