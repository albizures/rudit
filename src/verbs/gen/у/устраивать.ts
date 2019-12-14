import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устраивать: PerfectVerb = {
  name: Word('устраивать', 4),
  singular1stPerson: Word('устраиваю', 4),
  singular2ndPerson: Word('устраиваешь', 4),
  singular3rdPerson: Word('устраивает', 4),
  plural1stPerson: Word('устраиваем', 4),
  plural2ndPerson: Word('устраиваете', 4),
  plural3rdPerson: Word('устраивают', 4),
  masculinePast: Word('устраивал', 4),
  femininePast: Word('устраивала', 4),
  neuterPast: Word('устраивало', 4),
  pluralPast: Word('устраивали', 4),
  imperativeInformal: Word('устраивай', 4),
  imperativeFormal: Word('устраивайте', 4),
  imperfect: ['устроить'],
};

perfectVerbs.set(устраивать.name.text, устраивать);

export { устраивать };