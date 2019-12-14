import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const декламировать: PerfectVerb = {
  name: Word('декламировать', 6),
  singular1stPerson: Word('декламирую', 6),
  singular2ndPerson: Word('декламируешь', 6),
  singular3rdPerson: Word('декламирует', 6),
  plural1stPerson: Word('декламируем', 6),
  plural2ndPerson: Word('декламируете', 6),
  plural3rdPerson: Word('декламируют', 6),
  masculinePast: Word('декламировал', 6),
  femininePast: Word('декламировала', 6),
  neuterPast: Word('декламировало', 6),
  pluralPast: Word('декламировали', 6),
  imperativeInformal: Word('декламируй', 6),
  imperativeFormal: Word('декламируйте', 6),
  imperfect: ['продекламировать'],
};

perfectVerbs.set(декламировать.name.text, декламировать);

export { декламировать };