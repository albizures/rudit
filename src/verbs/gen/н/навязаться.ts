import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навязаться: PerfectVerb = {
  name: Word('навязаться', 5),
  singular1stPerson: Word('навяжусь', 5),
  singular2ndPerson: Word('навяжешься', 3),
  singular3rdPerson: Word('навяжется', 3),
  plural1stPerson: Word('навяжемся', 3),
  plural2ndPerson: Word('навяжетесь', 3),
  plural3rdPerson: Word('навяжутся', 3),
  masculinePast: Word('навязался', 5),
  femininePast: Word('навязалась', 5),
  neuterPast: Word('навязалось', 5),
  pluralPast: Word('навязались', 5),
  imperativeInformal: Word('навяжись', 5),
  imperativeFormal: Word('навяжитесь', 5),
  imperfect: [],
};

perfectVerbs.set(навязаться.name.text, навязаться);

export { навязаться };