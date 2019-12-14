import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причащать: PerfectVerb = {
  name: Word('причащать', 6),
  singular1stPerson: Word('причащаю', 6),
  singular2ndPerson: Word('причащаешь', 6),
  singular3rdPerson: Word('причащает', 6),
  plural1stPerson: Word('причащаем', 6),
  plural2ndPerson: Word('причащаете', 6),
  plural3rdPerson: Word('причащают', 6),
  masculinePast: Word('причащал', 6),
  femininePast: Word('причащала', 6),
  neuterPast: Word('причащало', 6),
  pluralPast: Word('причащали', 6),
  imperativeInformal: Word('причащай', 6),
  imperativeFormal: Word('причащайте', 6),
  imperfect: [],
};

perfectVerbs.set(причащать.name.text, причащать);

export { причащать };