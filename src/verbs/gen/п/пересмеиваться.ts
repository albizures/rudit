import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересмеиваться: PerfectVerb = {
  name: Word('пересмеиваться', 6),
  singular1stPerson: Word('пересмеиваюсь', 6),
  singular2ndPerson: Word('пересмеиваешься', 6),
  singular3rdPerson: Word('пересмеивается', 6),
  plural1stPerson: Word('пересмеиваемся', 6),
  plural2ndPerson: Word('пересмеиваетесь', 6),
  plural3rdPerson: Word('пересмеиваются', 6),
  masculinePast: Word('пересмеивался', 6),
  femininePast: Word('пересмеивалась', 6),
  neuterPast: Word('пересмеивалось', 6),
  pluralPast: Word('пересмеивались', 6),
  imperativeInformal: Word('пересмеивайся', 6),
  imperativeFormal: Word('пересмеивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пересмеиваться.name.text, пересмеиваться);

export { пересмеиваться };