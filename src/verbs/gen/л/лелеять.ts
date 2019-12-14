import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лелеять: PerfectVerb = {
  name: Word('лелеять', 3),
  singular1stPerson: Word('лелею', 3),
  singular2ndPerson: Word('лелеешь', 3),
  singular3rdPerson: Word('лелеет', 3),
  plural1stPerson: Word('лелеем', 3),
  plural2ndPerson: Word('лелеете', 3),
  plural3rdPerson: Word('лелеют', 3),
  masculinePast: Word('лелеял', 3),
  femininePast: Word('лелеяла', 3),
  neuterPast: Word('лелеяло', 3),
  pluralPast: Word('лелеяли', 3),
  imperativeInformal: Word('лелей', 3),
  imperativeFormal: Word('лелейте', 3),
  imperfect: [],
};

perfectVerbs.set(лелеять.name.text, лелеять);

export { лелеять };