import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побелеть: PerfectVerb = {
  name: Word('побелеть', 5),
  singular1stPerson: Word('побелею', 5),
  singular2ndPerson: Word('побелеешь', 5),
  singular3rdPerson: Word('побелеет', 5),
  plural1stPerson: Word('побелеем', 5),
  plural2ndPerson: Word('побелеете', 5),
  plural3rdPerson: Word('побелеют', 5),
  masculinePast: Word('побелел', 5),
  femininePast: Word('побелела', 5),
  neuterPast: Word('побелело', 5),
  pluralPast: Word('побелели', 5),
  imperativeInformal: Word('побелей', 5),
  imperativeFormal: Word('побелейте', 5),
  imperfect: [],
};

perfectVerbs.set(побелеть.name.text, побелеть);

export { побелеть };