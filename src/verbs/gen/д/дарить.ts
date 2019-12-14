import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дарить: PerfectVerb = {
  name: Word('дарить', 3),
  singular1stPerson: Word('дарю', 3),
  singular2ndPerson: Word('даришь', 1),
  singular3rdPerson: Word('дарит', 1),
  plural1stPerson: Word('дарим', 1),
  plural2ndPerson: Word('дарите', 1),
  plural3rdPerson: Word('дарят', 1),
  masculinePast: Word('дарил', 3),
  femininePast: Word('дарила', 3),
  neuterPast: Word('дарило', 3),
  pluralPast: Word('дарили', 3),
  imperativeInformal: Word('дари', 3),
  imperativeFormal: Word('дарите', 3),
  imperfect: [],
};

perfectVerbs.set(дарить.name.text, дарить);

export { дарить };