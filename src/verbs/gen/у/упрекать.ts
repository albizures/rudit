import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрекать: PerfectVerb = {
  name: Word('упрекать', 5),
  singular1stPerson: Word('упрекаю', 5),
  singular2ndPerson: Word('упрекаешь', 5),
  singular3rdPerson: Word('упрекает', 5),
  plural1stPerson: Word('упрекаем', 5),
  plural2ndPerson: Word('упрекаете', 5),
  plural3rdPerson: Word('упрекают', 5),
  masculinePast: Word('упрекал', 5),
  femininePast: Word('упрекала', 5),
  neuterPast: Word('упрекало', 5),
  pluralPast: Word('упрекали', 5),
  imperativeInformal: Word('упрекай', 5),
  imperativeFormal: Word('упрекайте', 5),
  imperfect: ['упрекнуть'],
};

perfectVerbs.set(упрекать.name.text, упрекать);

export { упрекать };