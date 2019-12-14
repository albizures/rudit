import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохлаждаться: PerfectVerb = {
  name: Word('прохлаждаться', 8),
  singular1stPerson: Word('прохлаждаюсь', 8),
  singular2ndPerson: Word('прохлаждаешься', 8),
  singular3rdPerson: Word('прохлаждается', 8),
  plural1stPerson: Word('прохлаждаемся', 8),
  plural2ndPerson: Word('прохлаждаетесь', 8),
  plural3rdPerson: Word('прохлаждаются', 8),
  masculinePast: Word('прохлаждался', 8),
  femininePast: Word('прохлаждалась', 8),
  neuterPast: Word('прохлаждалось', 8),
  pluralPast: Word('прохлаждались', 8),
  imperativeInformal: Word('прохлаждайся', 8),
  imperativeFormal: Word('прохлаждайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(прохлаждаться.name.text, прохлаждаться);

export { прохлаждаться };