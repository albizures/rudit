import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откладываться: PerfectVerb = {
  name: Word('откладываться', 4),
  singular1stPerson: Word('откладываюсь', 4),
  singular2ndPerson: Word('откладываешься', 4),
  singular3rdPerson: Word('откладывается', 4),
  plural1stPerson: Word('откладываемся', 4),
  plural2ndPerson: Word('откладываетесь', 4),
  plural3rdPerson: Word('откладываются', 4),
  masculinePast: Word('откладывался', 4),
  femininePast: Word('откладывалась', 4),
  neuterPast: Word('откладывалось', 4),
  pluralPast: Word('откладывались', 4),
  imperativeInformal: Word('откладывайся', 4),
  imperativeFormal: Word('откладывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(откладываться.name.text, откладываться);

export { откладываться };