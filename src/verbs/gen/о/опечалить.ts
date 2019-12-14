import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опечалить: PerfectVerb = {
  name: Word('опечалить', 4),
  singular1stPerson: Word('опечалю', 4),
  singular2ndPerson: Word('опечалишь', 4),
  singular3rdPerson: Word('опечалит', 4),
  plural1stPerson: Word('опечалим', 4),
  plural2ndPerson: Word('опечалите', 4),
  plural3rdPerson: Word('опечалят', 4),
  masculinePast: Word('опечалил', 4),
  femininePast: Word('опечалила', 4),
  neuterPast: Word('опечалило', 4),
  pluralPast: Word('опечалили', 4),
  imperativeInformal: Word('опечаль', 4),
  imperativeFormal: Word('опечальте', 4),
  imperfect: [],
};

perfectVerbs.set(опечалить.name.text, опечалить);

export { опечалить };