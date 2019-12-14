import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дежурить: PerfectVerb = {
  name: Word('дежурить', 3),
  singular1stPerson: Word('дежурю', 3),
  singular2ndPerson: Word('дежуришь', 3),
  singular3rdPerson: Word('дежурит', 3),
  plural1stPerson: Word('дежурим', 3),
  plural2ndPerson: Word('дежурите', 3),
  plural3rdPerson: Word('дежурят', 3),
  masculinePast: Word('дежурил', 3),
  femininePast: Word('дежурила', 3),
  neuterPast: Word('дежурило', 3),
  pluralPast: Word('дежурили', 3),
  imperativeInformal: Word('дежурь', 3),
  imperativeFormal: Word('дежурьте', 3),
  imperfect: [],
};

perfectVerbs.set(дежурить.name.text, дежурить);

export { дежурить };