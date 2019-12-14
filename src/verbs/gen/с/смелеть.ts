import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смелеть: PerfectVerb = {
  name: Word('смелеть', 4),
  singular1stPerson: Word('смелею', 4),
  singular2ndPerson: Word('смелеешь', 4),
  singular3rdPerson: Word('смелеет', 4),
  plural1stPerson: Word('смелеем', 4),
  plural2ndPerson: Word('смелеете', 4),
  plural3rdPerson: Word('смелеют', 4),
  masculinePast: Word('смелел', 4),
  femininePast: Word('смелела', 4),
  neuterPast: Word('смелело', 4),
  pluralPast: Word('смелели', 4),
  imperativeInformal: Word('смелей', 4),
  imperativeFormal: Word('смелейте', 4),
  imperfect: [],
};

perfectVerbs.set(смелеть.name.text, смелеть);

export { смелеть };