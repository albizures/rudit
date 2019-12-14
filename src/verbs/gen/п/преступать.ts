import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преступать: PerfectVerb = {
  name: Word('преступать', 7),
  singular1stPerson: Word('преступаю', 7),
  singular2ndPerson: Word('преступаешь', 7),
  singular3rdPerson: Word('преступает', 7),
  plural1stPerson: Word('преступаем', 7),
  plural2ndPerson: Word('преступаете', 7),
  plural3rdPerson: Word('преступают', 7),
  masculinePast: Word('преступал', 7),
  femininePast: Word('преступала', 7),
  neuterPast: Word('преступало', 7),
  pluralPast: Word('преступали', 7),
  imperativeInformal: Word('преступай', 7),
  imperativeFormal: Word('преступайте', 7),
  imperfect: [],
};

perfectVerbs.set(преступать.name.text, преступать);

export { преступать };