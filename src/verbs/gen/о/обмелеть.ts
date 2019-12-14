import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмелеть: PerfectVerb = {
  name: Word('обмелеть', 5),
  singular1stPerson: Word('обмелею', 5),
  singular2ndPerson: Word('обмелеешь', 5),
  singular3rdPerson: Word('обмелеет', 5),
  plural1stPerson: Word('обмелеем', 5),
  plural2ndPerson: Word('обмелеете', 5),
  plural3rdPerson: Word('обмелеют', 5),
  masculinePast: Word('обмелел', 5),
  femininePast: Word('обмелела', 5),
  neuterPast: Word('обмелело', 5),
  pluralPast: Word('обмелели', 5),
  imperativeInformal: Word('обмелей', 5),
  imperativeFormal: Word('обмелейте', 5),
  imperfect: [],
};

perfectVerbs.set(обмелеть.name.text, обмелеть);

export { обмелеть };