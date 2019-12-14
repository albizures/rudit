import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опустеть: PerfectVerb = {
  name: Word('опустеть', 5),
  singular1stPerson: Word('опустею', 5),
  singular2ndPerson: Word('опустеешь', 5),
  singular3rdPerson: Word('опустеет', 5),
  plural1stPerson: Word('опустеем', 5),
  plural2ndPerson: Word('опустеете', 5),
  plural3rdPerson: Word('опустеют', 5),
  masculinePast: Word('опустел', 5),
  femininePast: Word('опустела', 5),
  neuterPast: Word('опустело', 5),
  pluralPast: Word('опустели', 5),
  imperativeInformal: Word('опустей', 5),
  imperativeFormal: Word('опустейте', 5),
  imperfect: [],
};

perfectVerbs.set(опустеть.name.text, опустеть);

export { опустеть };