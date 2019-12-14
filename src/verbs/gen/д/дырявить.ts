import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дырявить: PerfectVerb = {
  name: Word('дырявить', 3),
  singular1stPerson: Word('дырявлю', 3),
  singular2ndPerson: Word('дырявишь', 3),
  singular3rdPerson: Word('дырявит', 3),
  plural1stPerson: Word('дырявим', 3),
  plural2ndPerson: Word('дырявите', 3),
  plural3rdPerson: Word('дырявят', 3),
  masculinePast: Word('дырявил', 3),
  femininePast: Word('дырявила', 3),
  neuterPast: Word('дырявило', 3),
  pluralPast: Word('дырявили', 3),
  imperativeInformal: Word('дырявь', 3),
  imperativeFormal: Word('дырявьте', 3),
  imperfect: [],
};

perfectVerbs.set(дырявить.name.text, дырявить);

export { дырявить };