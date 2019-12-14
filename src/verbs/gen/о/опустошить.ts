import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опустошить: PerfectVerb = {
  name: Word('опустошить', 7),
  singular1stPerson: Word('опустошу', 7),
  singular2ndPerson: Word('опустошишь', 7),
  singular3rdPerson: Word('опустошит', 7),
  plural1stPerson: Word('опустошим', 7),
  plural2ndPerson: Word('опустошите', 7),
  plural3rdPerson: Word('опустошат', 7),
  masculinePast: Word('опустошил', 7),
  femininePast: Word('опустошила', 7),
  neuterPast: Word('опустошило', 7),
  pluralPast: Word('опустошили', 7),
  imperativeInformal: Word('опустоши', 7),
  imperativeFormal: Word('опустошите', 7),
  imperfect: [],
};

perfectVerbs.set(опустошить.name.text, опустошить);

export { опустошить };