import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорожиться: PerfectVerb = {
  name: Word('дорожиться', 5),
  singular1stPerson: Word('дорожусь', 5),
  singular2ndPerson: Word('дорожишься', 5),
  singular3rdPerson: Word('дорожится', 5),
  plural1stPerson: Word('дорожимся', 5),
  plural2ndPerson: Word('дорожитесь', 5),
  plural3rdPerson: Word('дорожатся', 5),
  masculinePast: Word('дорожился', 5),
  femininePast: Word('дорожилась', 5),
  neuterPast: Word('дорожилось', 5),
  pluralPast: Word('дорожились', 5),
  imperativeInformal: Word('дорожись', 5),
  imperativeFormal: Word('дорожитесь', 5),
  imperfect: [],
};

perfectVerbs.set(дорожиться.name.text, дорожиться);

export { дорожиться };