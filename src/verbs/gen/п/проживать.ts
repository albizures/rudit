import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проживать: PerfectVerb = {
  name: Word('проживать', 6),
  singular1stPerson: Word('проживаю', 6),
  singular2ndPerson: Word('проживаешь', 6),
  singular3rdPerson: Word('проживает', 6),
  plural1stPerson: Word('проживаем', 6),
  plural2ndPerson: Word('проживаете', 6),
  plural3rdPerson: Word('проживают', 6),
  masculinePast: Word('проживал', 6),
  femininePast: Word('проживала', 6),
  neuterPast: Word('проживало', 6),
  pluralPast: Word('проживали', 6),
  imperativeInformal: Word('проживай', 6),
  imperativeFormal: Word('проживайте', 6),
  imperfect: ['прожить'],
};

perfectVerbs.set(проживать.name.text, проживать);

export { проживать };