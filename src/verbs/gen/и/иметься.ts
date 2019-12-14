import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иметься: PerfectVerb = {
  name: Word('иметься', 2),
  singular1stPerson: Word('имеюсь', 2),
  singular2ndPerson: Word('имеешься', 2),
  singular3rdPerson: Word('имеется', 2),
  plural1stPerson: Word('имеемся', 2),
  plural2ndPerson: Word('имеетесь', 2),
  plural3rdPerson: Word('имеются', 2),
  masculinePast: Word('имелся', 2),
  femininePast: Word('имелась', 2),
  neuterPast: Word('имелось', 2),
  pluralPast: Word('имелись', 2),
  imperativeInformal: Word('имейся', 2),
  imperativeFormal: Word('имейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(иметься.name.text, иметься);

export { иметься };