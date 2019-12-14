import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принаряжать: PerfectVerb = {
  name: Word('принаряжать', 8),
  singular1stPerson: Word('принаряжаю', 8),
  singular2ndPerson: Word('принаряжаешь', 8),
  singular3rdPerson: Word('принаряжает', 8),
  plural1stPerson: Word('принаряжаем', 8),
  plural2ndPerson: Word('принаряжаете', 8),
  plural3rdPerson: Word('принаряжают', 8),
  masculinePast: Word('принаряжал', 8),
  femininePast: Word('принаряжала', 8),
  neuterPast: Word('принаряжало', 8),
  pluralPast: Word('принаряжали', 8),
  imperativeInformal: Word('принаряжай', 8),
  imperativeFormal: Word('принаряжайте', 8),
  imperfect: [],
};

perfectVerbs.set(принаряжать.name.text, принаряжать);

export { принаряжать };