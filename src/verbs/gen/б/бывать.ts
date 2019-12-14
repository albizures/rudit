import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бывать: PerfectVerb = {
  name: Word('бывать', 3),
  singular1stPerson: Word('бываю', 3),
  singular2ndPerson: Word('бываешь', 3),
  singular3rdPerson: Word('бывает', 3),
  plural1stPerson: Word('бываем', 3),
  plural2ndPerson: Word('бываете', 3),
  plural3rdPerson: Word('бывают', 3),
  masculinePast: Word('бывал', 3),
  femininePast: Word('бывала', 3),
  neuterPast: Word('бывало', 3),
  pluralPast: Word('бывали', 3),
  imperativeInformal: Word('бывай', 3),
  imperativeFormal: Word('бывайте', 3),
  imperfect: ['побывать'],
};

perfectVerbs.set(бывать.name.text, бывать);

export { бывать };