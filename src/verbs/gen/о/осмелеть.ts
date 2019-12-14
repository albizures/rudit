import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмелеть: PerfectVerb = {
  name: Word('осмелеть', 5),
  singular1stPerson: Word('осмелею', 5),
  singular2ndPerson: Word('осмелеешь', 5),
  singular3rdPerson: Word('осмелеет', 5),
  plural1stPerson: Word('осмелеем', 5),
  plural2ndPerson: Word('осмелеете', 5),
  plural3rdPerson: Word('осмелеют', 5),
  masculinePast: Word('осмелел', 5),
  femininePast: Word('осмелела', 5),
  neuterPast: Word('осмелело', 5),
  pluralPast: Word('осмелели', 5),
  imperativeInformal: Word('осмелей', 5),
  imperativeFormal: Word('осмелейте', 5),
  imperfect: [],
};

perfectVerbs.set(осмелеть.name.text, осмелеть);

export { осмелеть };