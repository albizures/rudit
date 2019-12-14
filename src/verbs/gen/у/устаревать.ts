import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устаревать: PerfectVerb = {
  name: Word('устаревать', 7),
  singular1stPerson: Word('устареваю', 7),
  singular2ndPerson: Word('устареваешь', 7),
  singular3rdPerson: Word('устаревает', 7),
  plural1stPerson: Word('устареваем', 7),
  plural2ndPerson: Word('устареваете', 7),
  plural3rdPerson: Word('устаревают', 7),
  masculinePast: Word('устаревал', 7),
  femininePast: Word('устаревала', 7),
  neuterPast: Word('устаревало', 7),
  pluralPast: Word('устаревали', 7),
  imperativeInformal: Word('устаревай', 7),
  imperativeFormal: Word('устаревайте', 7),
  imperfect: [],
};

perfectVerbs.set(устаревать.name.text, устаревать);

export { устаревать };