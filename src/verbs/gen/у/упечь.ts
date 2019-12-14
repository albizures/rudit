import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упечь: PerfectVerb = {
  name: Word('упечь', 2),
  singular1stPerson: Word('упеку', 4),
  singular2ndPerson: Word('упечёшь', 4),
  singular3rdPerson: Word('упечёт', 4),
  plural1stPerson: Word('упечём', 4),
  plural2ndPerson: Word('упечёте', 4),
  plural3rdPerson: Word('упекут', 4),
  masculinePast: Word('упёк', 2),
  femininePast: Word('упекла', 5),
  neuterPast: Word('упекло', 5),
  pluralPast: Word('упекли', 5),
  imperativeInformal: Word('упеки', 4),
  imperativeFormal: Word('упеките', 4),
  imperfect: [],
};

perfectVerbs.set(упечь.name.text, упечь);

export { упечь };