import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прописываться: PerfectVerb = {
  name: Word('прописываться', 4),
  singular1stPerson: Word('прописываюсь', 4),
  singular2ndPerson: Word('прописываешься', 4),
  singular3rdPerson: Word('прописывается', 4),
  plural1stPerson: Word('прописываемся', 4),
  plural2ndPerson: Word('прописываетесь', 4),
  plural3rdPerson: Word('прописываются', 4),
  masculinePast: Word('прописывался', 4),
  femininePast: Word('прописывалась', 4),
  neuterPast: Word('прописывалось', 4),
  pluralPast: Word('прописывались', 4),
  imperativeInformal: Word('прописывайся', 4),
  imperativeFormal: Word('прописывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прописываться.name.text, прописываться);

export { прописываться };