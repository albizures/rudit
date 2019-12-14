import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опьянить: PerfectVerb = {
  name: Word('опьянить', 5),
  singular1stPerson: Word('опьяню', 5),
  singular2ndPerson: Word('опьянишь', 5),
  singular3rdPerson: Word('опьянит', 5),
  plural1stPerson: Word('опьяним', 5),
  plural2ndPerson: Word('опьяните', 5),
  plural3rdPerson: Word('опьянят', 5),
  masculinePast: Word('опьянил', 5),
  femininePast: Word('опьянила', 5),
  neuterPast: Word('опьянило', 5),
  pluralPast: Word('опьянили', 5),
  imperativeInformal: Word('опьяни', 5),
  imperativeFormal: Word('опьяните', 5),
  imperfect: [],
};

perfectVerbs.set(опьянить.name.text, опьянить);

export { опьянить };