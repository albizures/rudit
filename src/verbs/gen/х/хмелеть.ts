import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хмелеть: PerfectVerb = {
  name: Word('хмелеть', 4),
  singular1stPerson: Word('хмелею', 4),
  singular2ndPerson: Word('хмелеешь', 4),
  singular3rdPerson: Word('хмелеет', 4),
  plural1stPerson: Word('хмелеем', 4),
  plural2ndPerson: Word('хмелеете', 4),
  plural3rdPerson: Word('хмелеют', 4),
  masculinePast: Word('хмелел', 4),
  femininePast: Word('хмелела', 4),
  neuterPast: Word('хмелело', 4),
  pluralPast: Word('хмелели', 4),
  imperativeInformal: Word('хмелей', 4),
  imperativeFormal: Word('хмелейте', 4),
  imperfect: [],
};

perfectVerbs.set(хмелеть.name.text, хмелеть);

export { хмелеть };