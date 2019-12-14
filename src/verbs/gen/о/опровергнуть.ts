import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опровергнуть: PerfectVerb = {
  name: Word('опровергнуть', 5),
  singular1stPerson: Word('опровергну', 5),
  singular2ndPerson: Word('опровергнешь', 5),
  singular3rdPerson: Word('опровергнет', 5),
  plural1stPerson: Word('опровергнем', 5),
  plural2ndPerson: Word('опровергнете', 5),
  plural3rdPerson: Word('опровергнут', 5),
  masculinePast: Word('опроверг//опрове'ргнул', 5),
  femininePast: Word('опровергла', 5),
  neuterPast: Word('опровергло', 5),
  pluralPast: Word('опровергли', 5),
  imperativeInformal: Word('опровергни', 5),
  imperativeFormal: Word('опровергните', 5),
  imperfect: [],
};

perfectVerbs.set(опровергнуть.name.text, опровергнуть);

export { опровергнуть };