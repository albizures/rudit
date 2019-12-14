import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеиваться: PerfectVerb = {
  name: Word('развеиваться', 4),
  singular1stPerson: Word('развеиваюсь', 4),
  singular2ndPerson: Word('развеиваешься', 4),
  singular3rdPerson: Word('развеивается', 4),
  plural1stPerson: Word('развеиваемся', 4),
  plural2ndPerson: Word('развеиваетесь', 4),
  plural3rdPerson: Word('развеиваются', 4),
  masculinePast: Word('развеивался', 4),
  femininePast: Word('развеивалась', 4),
  neuterPast: Word('развеивалось', 4),
  pluralPast: Word('развеивались', 4),
  imperativeInformal: Word('развеивайся', 4),
  imperativeFormal: Word('развеивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(развеиваться.name.text, развеиваться);

export { развеиваться };