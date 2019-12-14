import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отяжелеть: PerfectVerb = {
  name: Word('отяжелеть', 6),
  singular1stPerson: Word('отяжелею', 6),
  singular2ndPerson: Word('отяжелеешь', 6),
  singular3rdPerson: Word('отяжелеет', 6),
  plural1stPerson: Word('отяжелеем', 6),
  plural2ndPerson: Word('отяжелеете', 6),
  plural3rdPerson: Word('отяжелеют', 6),
  masculinePast: Word('отяжелел', 6),
  femininePast: Word('отяжелела', 6),
  neuterPast: Word('отяжелело', 6),
  pluralPast: Word('отяжелели', 6),
  imperativeInformal: Word('отяжелей', 6),
  imperativeFormal: Word('отяжелейте', 6),
  imperfect: [],
};

perfectVerbs.set(отяжелеть.name.text, отяжелеть);

export { отяжелеть };