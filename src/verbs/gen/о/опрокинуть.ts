import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опрокинуть: PerfectVerb = {
  name: Word('опрокинуть', 5),
  singular1stPerson: Word('опрокину', 5),
  singular2ndPerson: Word('опрокинешь', 5),
  singular3rdPerson: Word('опрокинет', 5),
  plural1stPerson: Word('опрокинем', 5),
  plural2ndPerson: Word('опрокинете', 5),
  plural3rdPerson: Word('опрокинут', 5),
  masculinePast: Word('опрокинул', 5),
  femininePast: Word('опрокинула', 5),
  neuterPast: Word('опрокинуло', 5),
  pluralPast: Word('опрокинули', 5),
  imperativeInformal: Word('опрокинь', 5),
  imperativeFormal: Word('опрокиньте', 5),
  imperfect: [],
};

perfectVerbs.set(опрокинуть.name.text, опрокинуть);

export { опрокинуть };