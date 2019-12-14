import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предрекать: PerfectVerb = {
  name: Word('предрекать', 7),
  singular1stPerson: Word('предрекаю', 7),
  singular2ndPerson: Word('предрекаешь', 7),
  singular3rdPerson: Word('предрекает', 7),
  plural1stPerson: Word('предрекаем', 7),
  plural2ndPerson: Word('предрекаете', 7),
  plural3rdPerson: Word('предрекают', 7),
  masculinePast: Word('предрекал', 7),
  femininePast: Word('предрекала', 7),
  neuterPast: Word('предрекало', 7),
  pluralPast: Word('предрекали', 7),
  imperativeInformal: Word('предрекай', 7),
  imperativeFormal: Word('предрекайте', 7),
  imperfect: [],
};

perfectVerbs.set(предрекать.name.text, предрекать);

export { предрекать };