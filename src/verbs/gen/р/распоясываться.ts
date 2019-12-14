import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распоясываться: PerfectVerb = {
  name: Word('распоясываться', 5),
  singular1stPerson: Word('распоясываюсь', 5),
  singular2ndPerson: Word('распоясываешься', 5),
  singular3rdPerson: Word('распоясывается', 5),
  plural1stPerson: Word('распоясываемся', 5),
  plural2ndPerson: Word('распоясываетесь', 5),
  plural3rdPerson: Word('распоясываются', 5),
  masculinePast: Word('распоясывался', 5),
  femininePast: Word('распоясывалась', 5),
  neuterPast: Word('распоясывалось', 5),
  pluralPast: Word('распоясывались', 5),
  imperativeInformal: Word('распоясывайся', 5),
  imperativeFormal: Word('распоясывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(распоясываться.name.text, распоясываться);

export { распоясываться };