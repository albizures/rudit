import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затечь: PerfectVerb = {
  name: Word('затечь', 3),
  singular1stPerson: Word('затеку', 5),
  singular2ndPerson: Word('затечёшь', 1),
  singular3rdPerson: Word('затечёт', 1),
  plural1stPerson: Word('затечём', 1),
  plural2ndPerson: Word('затечёте', 1),
  plural3rdPerson: Word('затекут', 5),
  masculinePast: Word('затёк', 1),
  femininePast: Word('затекла', 6),
  neuterPast: Word('затекло', 6),
  pluralPast: Word('затекли', 6),
  imperativeInformal: Word('затеки', 5),
  imperativeFormal: Word('затеките', 5),
  imperfect: [],
};

perfectVerbs.set(затечь.name.text, затечь);

export { затечь };