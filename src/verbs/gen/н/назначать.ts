import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назначать: PerfectVerb = {
  name: Word('назначать', 6),
  singular1stPerson: Word('назначаю', 6),
  singular2ndPerson: Word('назначаешь', 6),
  singular3rdPerson: Word('назначает', 6),
  plural1stPerson: Word('назначаем', 6),
  plural2ndPerson: Word('назначаете', 6),
  plural3rdPerson: Word('назначают', 6),
  masculinePast: Word('назначал', 6),
  femininePast: Word('назначала', 6),
  neuterPast: Word('назначало', 6),
  pluralPast: Word('назначали', 6),
  imperativeInformal: Word('назначай', 6),
  imperativeFormal: Word('назначайте', 6),
  imperfect: ['назначить'],
};

perfectVerbs.set(назначать.name.text, назначать);

export { назначать };