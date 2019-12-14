import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибираться: PerfectVerb = {
  name: Word('прибираться', 6),
  singular1stPerson: Word('прибираюсь', 6),
  singular2ndPerson: Word('прибираешься', 6),
  singular3rdPerson: Word('прибирается', 6),
  plural1stPerson: Word('прибираемся', 6),
  plural2ndPerson: Word('прибираетесь', 6),
  plural3rdPerson: Word('прибираются', 6),
  masculinePast: Word('прибирался', 6),
  femininePast: Word('прибиралась', 6),
  neuterPast: Word('прибиралось', 6),
  pluralPast: Word('прибирались', 6),
  imperativeInformal: Word('прибирайся', 6),
  imperativeFormal: Word('прибирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прибираться.name.text, прибираться);

export { прибираться };