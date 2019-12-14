import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпечь: PerfectVerb = {
  name: Word('выпечь', 1),
  singular1stPerson: Word('выпеку', 1),
  singular2ndPerson: Word('выпечешь', 1),
  singular3rdPerson: Word('выпечет', 1),
  plural1stPerson: Word('выпечем', 1),
  plural2ndPerson: Word('выпечете', 1),
  plural3rdPerson: Word('выпекут', 1),
  masculinePast: Word('выпек', 1),
  femininePast: Word('выпекла', 1),
  neuterPast: Word('выпекло', 1),
  pluralPast: Word('выпекли', 1),
  imperativeInformal: Word('выпеки', 1),
  imperativeFormal: Word('выпеките', 1),
  imperfect: [],
};

perfectVerbs.set(выпечь.name.text, выпечь);

export { выпечь };