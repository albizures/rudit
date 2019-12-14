import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навязываться: PerfectVerb = {
  name: Word('навязываться', 3),
  singular1stPerson: Word('навязываюсь', 3),
  singular2ndPerson: Word('навязываешься', 3),
  singular3rdPerson: Word('навязывается', 3),
  plural1stPerson: Word('навязываемся', 3),
  plural2ndPerson: Word('навязываетесь', 3),
  plural3rdPerson: Word('навязываются', 3),
  masculinePast: Word('навязывался', 3),
  femininePast: Word('навязывалась', 3),
  neuterPast: Word('навязывалось', 3),
  pluralPast: Word('навязывались', 3),
  imperativeInformal: Word('навязывайся', 3),
  imperativeFormal: Word('навязывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(навязываться.name.text, навязываться);

export { навязываться };