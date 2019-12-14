import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опостылеть: PerfectVerb = {
  name: Word('опостылеть', 5),
  singular1stPerson: Word('опостылею', 5),
  singular2ndPerson: Word('опостылеешь', 5),
  singular3rdPerson: Word('опостылеет', 5),
  plural1stPerson: Word('опостылеем', 5),
  plural2ndPerson: Word('опостылеете', 5),
  plural3rdPerson: Word('опостылеют', 5),
  masculinePast: Word('опостылел', 5),
  femininePast: Word('опостылела', 5),
  neuterPast: Word('опостылело', 5),
  pluralPast: Word('опостылели', 5),
  imperativeInformal: Word('опостылей', 5),
  imperativeFormal: Word('опостылейте', 5),
  imperfect: [],
};

perfectVerbs.set(опостылеть.name.text, опостылеть);

export { опостылеть };