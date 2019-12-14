import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опылить: PerfectVerb = {
  name: Word('опылить', 4),
  singular1stPerson: Word('опылю', 4),
  singular2ndPerson: Word('опылишь', 4),
  singular3rdPerson: Word('опылит', 4),
  plural1stPerson: Word('опылим', 4),
  plural2ndPerson: Word('опылите', 4),
  plural3rdPerson: Word('опылят', 4),
  masculinePast: Word('опылил', 4),
  femininePast: Word('опылила', 4),
  neuterPast: Word('опылило', 4),
  pluralPast: Word('опылили', 4),
  imperativeInformal: Word('опыли', 4),
  imperativeFormal: Word('опылите', 4),
  imperfect: [],
};

perfectVerbs.set(опылить.name.text, опылить);

export { опылить };