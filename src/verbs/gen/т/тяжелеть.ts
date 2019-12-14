import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тяжелеть: PerfectVerb = {
  name: Word('тяжелеть', 5),
  singular1stPerson: Word('тяжелею', 5),
  singular2ndPerson: Word('тяжелеешь', 5),
  singular3rdPerson: Word('тяжелеет', 5),
  plural1stPerson: Word('тяжелеем', 5),
  plural2ndPerson: Word('тяжелеете', 5),
  plural3rdPerson: Word('тяжелеют', 5),
  masculinePast: Word('тяжелел', 5),
  femininePast: Word('тяжелела', 5),
  neuterPast: Word('тяжелело', 5),
  pluralPast: Word('тяжелели', 5),
  imperativeInformal: Word('тяжелей', 5),
  imperativeFormal: Word('тяжелейте', 5),
  imperfect: [],
};

perfectVerbs.set(тяжелеть.name.text, тяжелеть);

export { тяжелеть };