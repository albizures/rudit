import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просечь: PerfectVerb = {
  name: Word('просечь', 4),
  singular1stPerson: Word('просеку', 6),
  singular2ndPerson: Word('просечёшь', 4),
  singular3rdPerson: Word('просечёт', 4),
  plural1stPerson: Word('просечём', 4),
  plural2ndPerson: Word('просечёте', 4),
  plural3rdPerson: Word('просекут', 6),
  masculinePast: Word('просек', 4),
  femininePast: Word('просекла', 7),
  neuterPast: Word('просекло', 7),
  pluralPast: Word('просекли', 7),
  imperativeInformal: Word('просеки', 6),
  imperativeFormal: Word('просеките', 6),
  imperfect: [],
};

perfectVerbs.set(просечь.name.text, просечь);

export { просечь };