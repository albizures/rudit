import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устилать: PerfectVerb = {
  name: Word('устилать', 5),
  singular1stPerson: Word('устилаю', 5),
  singular2ndPerson: Word('устилаешь', 5),
  singular3rdPerson: Word('устилает', 5),
  plural1stPerson: Word('устилаем', 5),
  plural2ndPerson: Word('устилаете', 5),
  plural3rdPerson: Word('устилают', 5),
  masculinePast: Word('устилал', 5),
  femininePast: Word('устилала', 5),
  neuterPast: Word('устилало', 5),
  pluralPast: Word('устилали', 5),
  imperativeInformal: Word('устилай', 5),
  imperativeFormal: Word('устилайте', 5),
  imperfect: [],
};

perfectVerbs.set(устилать.name.text, устилать);

export { устилать };