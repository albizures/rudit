import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захмелеть: PerfectVerb = {
  name: Word('захмелеть', 6),
  singular1stPerson: Word('захмелею', 6),
  singular2ndPerson: Word('захмелеешь', 6),
  singular3rdPerson: Word('захмелеет', 6),
  plural1stPerson: Word('захмелеем', 6),
  plural2ndPerson: Word('захмелеете', 6),
  plural3rdPerson: Word('захмелеют', 6),
  masculinePast: Word('захмелел', 6),
  femininePast: Word('захмелела', 6),
  neuterPast: Word('захмелело', 6),
  pluralPast: Word('захмелели', 6),
  imperativeInformal: Word('захмелей', 6),
  imperativeFormal: Word('захмелейте', 6),
  imperfect: [],
};

perfectVerbs.set(захмелеть.name.text, захмелеть);

export { захмелеть };