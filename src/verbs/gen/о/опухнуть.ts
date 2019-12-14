import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опухнуть: PerfectVerb = {
  name: Word('опухнуть', 2),
  singular1stPerson: Word('опухну', 2),
  singular2ndPerson: Word('опухнешь', 2),
  singular3rdPerson: Word('опухнет', 2),
  plural1stPerson: Word('опухнем', 2),
  plural2ndPerson: Word('опухнете', 2),
  plural3rdPerson: Word('опухнут', 2),
  masculinePast: Word('опух', 2),
  femininePast: Word('опухла', 2),
  neuterPast: Word('опухло', 2),
  pluralPast: Word('опухли', 2),
  imperativeInformal: Word('опухни', 2),
  imperativeFormal: Word('опухните', 2),
  imperfect: [],
};

perfectVerbs.set(опухнуть.name.text, опухнуть);

export { опухнуть };