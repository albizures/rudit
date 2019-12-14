import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растираться: PerfectVerb = {
  name: Word('растираться', 6),
  singular1stPerson: Word('растираюсь', 6),
  singular2ndPerson: Word('растираешься', 6),
  singular3rdPerson: Word('растирается', 6),
  plural1stPerson: Word('растираемся', 6),
  plural2ndPerson: Word('растираетесь', 6),
  plural3rdPerson: Word('растираются', 6),
  masculinePast: Word('растирался', 6),
  femininePast: Word('растиралась', 6),
  neuterPast: Word('растиралось', 6),
  pluralPast: Word('растирались', 6),
  imperativeInformal: Word('растирайся', 6),
  imperativeFormal: Word('растирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(растираться.name.text, растираться);

export { растираться };