import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потяжелеть: PerfectVerb = {
  name: Word('потяжелеть', 7),
  singular1stPerson: Word('потяжелею', 7),
  singular2ndPerson: Word('потяжелеешь', 7),
  singular3rdPerson: Word('потяжелеет', 7),
  plural1stPerson: Word('потяжелеем', 7),
  plural2ndPerson: Word('потяжелеете', 7),
  plural3rdPerson: Word('потяжелеют', 7),
  masculinePast: Word('потяжелел', 7),
  femininePast: Word('потяжелела', 7),
  neuterPast: Word('потяжелело', 7),
  pluralPast: Word('потяжелели', 7),
  imperativeInformal: Word('потяжелей', 7),
  imperativeFormal: Word('потяжелейте', 7),
  imperfect: [],
};

perfectVerbs.set(потяжелеть.name.text, потяжелеть);

export { потяжелеть };