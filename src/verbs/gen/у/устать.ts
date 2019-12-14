import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устать: PerfectVerb = {
  name: Word('устать', 3),
  singular1stPerson: Word('устану', 3),
  singular2ndPerson: Word('устанешь', 3),
  singular3rdPerson: Word('устанет', 3),
  plural1stPerson: Word('устанем', 3),
  plural2ndPerson: Word('устанете', 3),
  plural3rdPerson: Word('устанут', 3),
  masculinePast: Word('устал', 3),
  femininePast: Word('устала', 3),
  neuterPast: Word('устало', 3),
  pluralPast: Word('устали', 3),
  imperativeInformal: Word('устань', 3),
  imperativeFormal: Word('устаньте', 3),
  imperfect: ['уставать'],
};

perfectVerbs.set(устать.name.text, устать);

export { устать };