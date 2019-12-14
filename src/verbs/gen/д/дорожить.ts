import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорожить: PerfectVerb = {
  name: Word('дорожить', 5),
  singular1stPerson: Word('дорожу', 5),
  singular2ndPerson: Word('дорожишь', 5),
  singular3rdPerson: Word('дорожит', 5),
  plural1stPerson: Word('дорожим', 5),
  plural2ndPerson: Word('дорожите', 5),
  plural3rdPerson: Word('дорожат', 5),
  masculinePast: Word('дорожил', 5),
  femininePast: Word('дорожила', 5),
  neuterPast: Word('дорожило', 5),
  pluralPast: Word('дорожили', 5),
  imperativeInformal: Word('дорожи', 5),
  imperativeFormal: Word('дорожите', 5),
  imperfect: [],
};

perfectVerbs.set(дорожить.name.text, дорожить);

export { дорожить };