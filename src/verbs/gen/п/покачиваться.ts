import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покачиваться: PerfectVerb = {
  name: Word('покачиваться', 3),
  singular1stPerson: Word('покачиваюсь', 3),
  singular2ndPerson: Word('покачиваешься', 3),
  singular3rdPerson: Word('покачивается', 3),
  plural1stPerson: Word('покачиваемся', 3),
  plural2ndPerson: Word('покачиваетесь', 3),
  plural3rdPerson: Word('покачиваются', 3),
  masculinePast: Word('покачивался', 3),
  femininePast: Word('покачивалась', 3),
  neuterPast: Word('покачивалось', 3),
  pluralPast: Word('покачивались', 3),
  imperativeInformal: Word('покачивайся', 3),
  imperativeFormal: Word('покачивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(покачиваться.name.text, покачиваться);

export { покачиваться };