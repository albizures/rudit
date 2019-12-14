import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опросить: PerfectVerb = {
  name: Word('опросить', 5),
  singular1stPerson: Word('опрошу', 5),
  singular2ndPerson: Word('опросишь', 3),
  singular3rdPerson: Word('опросит', 3),
  plural1stPerson: Word('опросим', 3),
  plural2ndPerson: Word('опросите', 3),
  plural3rdPerson: Word('опросят', 3),
  masculinePast: Word('опросил', 5),
  femininePast: Word('опросила', 5),
  neuterPast: Word('опросило', 5),
  pluralPast: Word('опросили', 5),
  imperativeInformal: Word('опроси', 5),
  imperativeFormal: Word('опросите', 5),
  imperfect: [],
};

perfectVerbs.set(опросить.name.text, опросить);

export { опросить };