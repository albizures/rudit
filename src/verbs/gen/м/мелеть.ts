import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мелеть: PerfectVerb = {
  name: Word('мелеть', 3),
  singular1stPerson: Word('мелею', 3),
  singular2ndPerson: Word('мелеешь', 3),
  singular3rdPerson: Word('мелеет', 3),
  plural1stPerson: Word('мелеем', 3),
  plural2ndPerson: Word('мелеете', 3),
  plural3rdPerson: Word('мелеют', 3),
  masculinePast: Word('мелел', 3),
  femininePast: Word('мелела', 3),
  neuterPast: Word('мелело', 3),
  pluralPast: Word('мелели', 3),
  imperativeInformal: Word('мелей', 3),
  imperativeFormal: Word('мелейте', 3),
  imperfect: [],
};

perfectVerbs.set(мелеть.name.text, мелеть);

export { мелеть };