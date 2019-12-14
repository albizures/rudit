import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтираться: PerfectVerb = {
  name: Word('подтираться', 6),
  singular1stPerson: Word('подтираюсь', 6),
  singular2ndPerson: Word('подтираешься', 6),
  singular3rdPerson: Word('подтирается', 6),
  plural1stPerson: Word('подтираемся', 6),
  plural2ndPerson: Word('подтираетесь', 6),
  plural3rdPerson: Word('подтираются', 6),
  masculinePast: Word('подтирался', 6),
  femininePast: Word('подтиралась', 6),
  neuterPast: Word('подтиралось', 6),
  pluralPast: Word('подтирались', 6),
  imperativeInformal: Word('подтирайся', 6),
  imperativeFormal: Word('подтирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(подтираться.name.text, подтираться);

export { подтираться };