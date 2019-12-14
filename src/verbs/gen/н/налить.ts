import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налить: PerfectVerb = {
  name: Word('налить', 3),
  singular1stPerson: Word('налью', 4),
  singular2ndPerson: Word('нальёшь', 1),
  singular3rdPerson: Word('нальёт', 1),
  plural1stPerson: Word('нальём', 1),
  plural2ndPerson: Word('нальёте', 1),
  plural3rdPerson: Word('нальют', 4),
  masculinePast: Word('налил', 3),
  femininePast: Word('налила', 5),
  neuterPast: Word('налило', 3),
  pluralPast: Word('налили', 3),
  imperativeInformal: Word('налей', 3),
  imperativeFormal: Word('налейте', 3),
  imperfect: ['наливать','лить'],
};

perfectVerbs.set(налить.name.text, налить);

export { налить };