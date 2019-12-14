import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завираться: PerfectVerb = {
  name: Word('завираться', 5),
  singular1stPerson: Word('завираюсь', 5),
  singular2ndPerson: Word('завираешься', 5),
  singular3rdPerson: Word('завирается', 5),
  plural1stPerson: Word('завираемся', 5),
  plural2ndPerson: Word('завираетесь', 5),
  plural3rdPerson: Word('завираются', 5),
  masculinePast: Word('завирался', 5),
  femininePast: Word('завиралась', 5),
  neuterPast: Word('завиралось', 5),
  pluralPast: Word('завирались', 5),
  imperativeInformal: Word('завирайся', 5),
  imperativeFormal: Word('завирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(завираться.name.text, завираться);

export { завираться };