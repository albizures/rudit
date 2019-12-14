import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стираться: PerfectVerb = {
  name: Word('стираться', 4),
  singular1stPerson: Word('стираюсь', 4),
  singular2ndPerson: Word('стираешься', 4),
  singular3rdPerson: Word('стирается', 4),
  plural1stPerson: Word('стираемся', 4),
  plural2ndPerson: Word('стираетесь', 4),
  plural3rdPerson: Word('стираются', 4),
  masculinePast: Word('стирался', 4),
  femininePast: Word('стиралась', 4),
  neuterPast: Word('стиралось', 4),
  pluralPast: Word('стирались', 4),
  imperativeInformal: Word('стирайся', 4),
  imperativeFormal: Word('стирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(стираться.name.text, стираться);

export { стираться };