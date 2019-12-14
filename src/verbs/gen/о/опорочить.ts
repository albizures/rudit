import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опорочить: PerfectVerb = {
  name: Word('опорочить', 4),
  singular1stPerson: Word('опорочу', 4),
  singular2ndPerson: Word('опорочишь', 4),
  singular3rdPerson: Word('опорочит', 4),
  plural1stPerson: Word('опорочим', 4),
  plural2ndPerson: Word('опорочите', 4),
  plural3rdPerson: Word('опорочат', 4),
  masculinePast: Word('опорочил', 4),
  femininePast: Word('опорочила', 4),
  neuterPast: Word('опорочило', 4),
  pluralPast: Word('опорочили', 4),
  imperativeInformal: Word('опорочь', 4),
  imperativeFormal: Word('опорочьте', 4),
  imperfect: [],
};

perfectVerbs.set(опорочить.name.text, опорочить);

export { опорочить };