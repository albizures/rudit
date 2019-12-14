import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увянуть: PerfectVerb = {
  name: Word('увянуть', 2),
  singular1stPerson: Word('увяну', 2),
  singular2ndPerson: Word('увянешь', 2),
  singular3rdPerson: Word('увянет', 2),
  plural1stPerson: Word('увянем', 2),
  plural2ndPerson: Word('увянете', 2),
  plural3rdPerson: Word('увянут', 2),
  masculinePast: Word('увял', 2),
  femininePast: Word('увяла', 2),
  neuterPast: Word('увяло', 2),
  pluralPast: Word('увяли', 2),
  imperativeInformal: Word('увянь', 2),
  imperativeFormal: Word('увяньте', 2),
  imperfect: [],
};

perfectVerbs.set(увянуть.name.text, увянуть);

export { увянуть };