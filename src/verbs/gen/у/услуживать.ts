import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const услуживать: PerfectVerb = {
  name: Word('услуживать', 3),
  singular1stPerson: Word('услуживаю', 3),
  singular2ndPerson: Word('услуживаешь', 3),
  singular3rdPerson: Word('услуживает', 3),
  plural1stPerson: Word('услуживаем', 3),
  plural2ndPerson: Word('услуживаете', 3),
  plural3rdPerson: Word('услуживают', 3),
  masculinePast: Word('услуживал', 3),
  femininePast: Word('услуживала', 3),
  neuterPast: Word('услуживало', 3),
  pluralPast: Word('услуживали', 3),
  imperativeInformal: Word('услуживай', 3),
  imperativeFormal: Word('услуживайте', 3),
  imperfect: [],
};

perfectVerbs.set(услуживать.name.text, услуживать);

export { услуживать };