import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завинчиваться: PerfectVerb = {
  name: Word('завинчиваться', 3),
  singular1stPerson: Word('завинчиваюсь', 3),
  singular2ndPerson: Word('завинчиваешься', 3),
  singular3rdPerson: Word('завинчивается', 3),
  plural1stPerson: Word('завинчиваемся', 3),
  plural2ndPerson: Word('завинчиваетесь', 3),
  plural3rdPerson: Word('завинчиваются', 3),
  masculinePast: Word('завинчивался', 3),
  femininePast: Word('завинчивалась', 3),
  neuterPast: Word('завинчивалось', 3),
  pluralPast: Word('завинчивались', 3),
  imperativeInformal: Word('завинчивайся', 3),
  imperativeFormal: Word('завинчивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(завинчиваться.name.text, завинчиваться);

export { завинчиваться };