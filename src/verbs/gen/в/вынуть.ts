import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынуть: PerfectVerb = {
  name: Word('вынуть', 1),
  singular1stPerson: Word('выну', 1),
  singular2ndPerson: Word('вынешь', 1),
  singular3rdPerson: Word('вынет', 1),
  plural1stPerson: Word('вынем', 1),
  plural2ndPerson: Word('вынете', 1),
  plural3rdPerson: Word('вынут', 1),
  masculinePast: Word('вы,вы'нул', 1),
  femininePast: Word('выла,вы'нула', 1),
  neuterPast: Word('выло,вы'нуло', 1),
  pluralPast: Word('выли,вы'нули', 1),
  imperativeInformal: Word('вынь', 1),
  imperativeFormal: Word('выньте', 1),
  imperfect: ['вынимать'],
};

perfectVerbs.set(вынуть.name.text, вынуть);

export { вынуть };