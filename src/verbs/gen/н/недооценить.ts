import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недооценить: PerfectVerb = {
  name: Word('недооценить', 8),
  singular1stPerson: Word('недооценю', 8),
  singular2ndPerson: Word('недооценишь', 6),
  singular3rdPerson: Word('недооценит', 6),
  plural1stPerson: Word('недооценим', 6),
  plural2ndPerson: Word('недооцените', 6),
  plural3rdPerson: Word('недооценят', 6),
  masculinePast: Word('недооценил', 8),
  femininePast: Word('недооценила', 8),
  neuterPast: Word('недооценило', 8),
  pluralPast: Word('недооценили', 8),
  imperativeInformal: Word('недооцени', 8),
  imperativeFormal: Word('недооцените', 8),
  imperfect: [],
};

perfectVerbs.set(недооценить.name.text, недооценить);

export { недооценить };