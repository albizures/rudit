import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const препровождать: PerfectVerb = {
  name: Word('препровождать', 10),
  singular1stPerson: Word('препровождаю', 10),
  singular2ndPerson: Word('препровождаешь', 10),
  singular3rdPerson: Word('препровождает', 10),
  plural1stPerson: Word('препровождаем', 10),
  plural2ndPerson: Word('препровождаете', 10),
  plural3rdPerson: Word('препровождают', 10),
  masculinePast: Word('препровождал', 10),
  femininePast: Word('препровождала', 10),
  neuterPast: Word('препровождало', 10),
  pluralPast: Word('препровождали', 10),
  imperativeInformal: Word('препровождай', 10),
  imperativeFormal: Word('препровождайте', 10),
  imperfect: [],
};

perfectVerbs.set(препровождать.name.text, препровождать);

export { препровождать };