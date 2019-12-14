import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опорожнить: PerfectVerb = {
  name: Word('опорожнить', 7),
  singular1stPerson: Word('опорожню', 7),
  singular2ndPerson: Word('опорожнишь', 7),
  singular3rdPerson: Word('опорожнит', 7),
  plural1stPerson: Word('опорожним', 7),
  plural2ndPerson: Word('опорожните', 7),
  plural3rdPerson: Word('опорожнят', 7),
  masculinePast: Word('опорожнил', 7),
  femininePast: Word('опорожнила', 7),
  neuterPast: Word('опорожнило', 7),
  pluralPast: Word('опорожнили', 7),
  imperativeInformal: Word('опорожни', 7),
  imperativeFormal: Word('опорожните', 7),
  imperfect: [],
};

perfectVerbs.set(опорожнить.name.text, опорожнить);

export { опорожнить };