import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разостлать: PerfectVerb = {
  name: Word('разостлать', 7),
  singular1stPerson: Word('расстелю', 7),
  singular2ndPerson: Word('расстелешь', 5),
  singular3rdPerson: Word('расстелет', 5),
  plural1stPerson: Word('расстелем', 5),
  plural2ndPerson: Word('расстелете', 5),
  plural3rdPerson: Word('расстелют', 5),
  masculinePast: Word('разостлал', 7),
  femininePast: Word('разостлала', 7),
  neuterPast: Word('разостлало', 7),
  pluralPast: Word('разостлали', 7),
  imperativeInformal: Word('расстели', 7),
  imperativeFormal: Word('расстелите', 7),
  imperfect: [],
};

perfectVerbs.set(разостлать.name.text, разостлать);

export { разостлать };