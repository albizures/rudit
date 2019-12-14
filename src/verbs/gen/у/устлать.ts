import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устлать: PerfectVerb = {
  name: Word('устлать', 4),
  singular1stPerson: Word('устелю', 5),
  singular2ndPerson: Word('устелешь', 3),
  singular3rdPerson: Word('устелет', 3),
  plural1stPerson: Word('устелем', 3),
  plural2ndPerson: Word('устелете', 3),
  plural3rdPerson: Word('устелют', 3),
  masculinePast: Word('устлал', 4),
  femininePast: Word('устлала', 4),
  neuterPast: Word('устлало', 4),
  pluralPast: Word('устлали', 4),
  imperativeInformal: Word('устели', 5),
  imperativeFormal: Word('устелите', 5),
  imperfect: [],
};

perfectVerbs.set(устлать.name.text, устлать);

export { устлать };