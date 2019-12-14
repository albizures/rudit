import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прописаться: PerfectVerb = {
  name: Word('прописаться', 6),
  singular1stPerson: Word('пропишусь', 6),
  singular2ndPerson: Word('пропишешься', 4),
  singular3rdPerson: Word('пропишется', 4),
  plural1stPerson: Word('пропишемся', 4),
  plural2ndPerson: Word('пропишетесь', 4),
  plural3rdPerson: Word('пропишутся', 4),
  masculinePast: Word('прописался', 6),
  femininePast: Word('прописалась', 6),
  neuterPast: Word('прописалось', 6),
  pluralPast: Word('прописались', 6),
  imperativeInformal: Word('пропишись', 6),
  imperativeFormal: Word('пропишитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прописаться.name.text, прописаться);

export { прописаться };