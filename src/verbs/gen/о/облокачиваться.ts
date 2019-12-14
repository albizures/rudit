import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облокачиваться: PerfectVerb = {
  name: Word('облокачиваться', 5),
  singular1stPerson: Word('облокачиваюсь', 5),
  singular2ndPerson: Word('облокачиваешься', 5),
  singular3rdPerson: Word('облокачивается', 5),
  plural1stPerson: Word('облокачиваемся', 5),
  plural2ndPerson: Word('облокачиваетесь', 5),
  plural3rdPerson: Word('облокачиваются', 5),
  masculinePast: Word('облокачивался', 5),
  femininePast: Word('облокачивалась', 5),
  neuterPast: Word('облокачивалось', 5),
  pluralPast: Word('облокачивались', 5),
  imperativeInformal: Word('облокачивайся', 5),
  imperativeFormal: Word('облокачивайтесь', 5),
  imperfect: ['облокотиться'],
};

perfectVerbs.set(облокачиваться.name.text, облокачиваться);

export { облокачиваться };