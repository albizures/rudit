import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоганить: PerfectVerb = {
  name: Word('опоганить', 4),
  singular1stPerson: Word('опоганю', 4),
  singular2ndPerson: Word('опоганишь', 4),
  singular3rdPerson: Word('опоганит', 4),
  plural1stPerson: Word('опоганим', 4),
  plural2ndPerson: Word('опоганите', 4),
  plural3rdPerson: Word('опоганят', 4),
  masculinePast: Word('опоганил', 4),
  femininePast: Word('опоганила', 4),
  neuterPast: Word('опоганило', 4),
  pluralPast: Word('опоганили', 4),
  imperativeInformal: Word('опогань', 4),
  imperativeFormal: Word('опоганьте', 4),
  imperfect: [],
};

perfectVerbs.set(опоганить.name.text, опоганить);

export { опоганить };