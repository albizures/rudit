import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опьянеть: PerfectVerb = {
  name: Word('опьянеть', 5),
  singular1stPerson: Word('опьянею', 5),
  singular2ndPerson: Word('опьянеешь', 5),
  singular3rdPerson: Word('опьянеет', 5),
  plural1stPerson: Word('опьянеем', 5),
  plural2ndPerson: Word('опьянеете', 5),
  plural3rdPerson: Word('опьянеют', 5),
  masculinePast: Word('опьянел', 5),
  femininePast: Word('опьянела', 5),
  neuterPast: Word('опьянело', 5),
  pluralPast: Word('опьянели', 5),
  imperativeInformal: Word('опьяней', 5),
  imperativeFormal: Word('опьянейте', 5),
  imperfect: [],
};

perfectVerbs.set(опьянеть.name.text, опьянеть);

export { опьянеть };