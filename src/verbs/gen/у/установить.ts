import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const установить: PerfectVerb = {
  name: Word('установить', 7),
  singular1stPerson: Word('установлю', 8),
  singular2ndPerson: Word('установишь', 5),
  singular3rdPerson: Word('установит', 5),
  plural1stPerson: Word('установим', 5),
  plural2ndPerson: Word('установите', 5),
  plural3rdPerson: Word('установят', 5),
  masculinePast: Word('', -1),
  femininePast: Word('', -1),
  neuterPast: Word('', -1),
  pluralPast: Word('', -1),
  imperativeInformal: Word('', -1),
  imperativeFormal: Word('', -1),
  imperfect: ['устанавливать'],
};

perfectVerbs.set(установить.name.text, установить);

export { установить };