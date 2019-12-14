import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опалить: PerfectVerb = {
  name: Word('опалить', 4),
  singular1stPerson: Word('опалю', 4),
  singular2ndPerson: Word('опалишь', 4),
  singular3rdPerson: Word('опалит', 4),
  plural1stPerson: Word('опалим', 4),
  plural2ndPerson: Word('опалите', 4),
  plural3rdPerson: Word('опалят', 4),
  masculinePast: Word('опалил', 4),
  femininePast: Word('опалила', 4),
  neuterPast: Word('опалило', 4),
  pluralPast: Word('опалили', 4),
  imperativeInformal: Word('опали', 4),
  imperativeFormal: Word('опалите', 4),
  imperfect: [],
};

perfectVerbs.set(опалить.name.text, опалить);

export { опалить };