import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взлелеять: PerfectVerb = {
  name: Word('взлелеять', 5),
  singular1stPerson: Word('взлелею', 5),
  singular2ndPerson: Word('взлелеешь', 5),
  singular3rdPerson: Word('взлелеет', 5),
  plural1stPerson: Word('взлелеем', 5),
  plural2ndPerson: Word('взлелеете', 5),
  plural3rdPerson: Word('взлелеют', 5),
  masculinePast: Word('взлелеял', 5),
  femininePast: Word('взлелеяла', 5),
  neuterPast: Word('взлелеяло', 5),
  pluralPast: Word('взлелеяли', 5),
  imperativeInformal: Word('взлелей', 5),
  imperativeFormal: Word('взлелейте', 5),
  imperfect: [],
};

perfectVerbs.set(взлелеять.name.text, взлелеять);

export { взлелеять };