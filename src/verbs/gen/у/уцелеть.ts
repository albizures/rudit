import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уцелеть: PerfectVerb = {
  name: Word('уцелеть', 4),
  singular1stPerson: Word('уцелею', 4),
  singular2ndPerson: Word('уцелеешь', 4),
  singular3rdPerson: Word('уцелеет', 4),
  plural1stPerson: Word('уцелеем', 4),
  plural2ndPerson: Word('уцелеете', 4),
  plural3rdPerson: Word('уцелеют', 4),
  masculinePast: Word('уцелел', 4),
  femininePast: Word('уцелела', 4),
  neuterPast: Word('уцелело', 4),
  pluralPast: Word('уцелели', 4),
  imperativeInformal: Word('уцелей', 4),
  imperativeFormal: Word('уцелейте', 4),
  imperfect: [],
};

perfectVerbs.set(уцелеть.name.text, уцелеть);

export { уцелеть };