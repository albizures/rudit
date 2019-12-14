import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опорожнять: PerfectVerb = {
  name: Word('опорожнять', 7),
  singular1stPerson: Word('опорожняю', 7),
  singular2ndPerson: Word('опорожняешь', 7),
  singular3rdPerson: Word('опорожняет', 7),
  plural1stPerson: Word('опорожняем', 7),
  plural2ndPerson: Word('опорожняете', 7),
  plural3rdPerson: Word('опорожняют', 7),
  masculinePast: Word('опорожнял', 7),
  femininePast: Word('опорожняла', 7),
  neuterPast: Word('опорожняло', 7),
  pluralPast: Word('опорожняли', 7),
  imperativeInformal: Word('опорожняй', 7),
  imperativeFormal: Word('опорожняйте', 7),
  imperfect: [],
};

perfectVerbs.set(опорожнять.name.text, опорожнять);

export { опорожнять };