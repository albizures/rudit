import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслаждаться: PerfectVerb = {
  name: Word('наслаждаться', 7),
  singular1stPerson: Word('наслаждаюсь', 7),
  singular2ndPerson: Word('наслаждаешься', 7),
  singular3rdPerson: Word('наслаждается', 7),
  plural1stPerson: Word('наслаждаемся', 7),
  plural2ndPerson: Word('наслаждаетесь', 7),
  plural3rdPerson: Word('наслаждаются', 7),
  masculinePast: Word('наслаждался', 7),
  femininePast: Word('наслаждалась', 7),
  neuterPast: Word('наслаждалось', 7),
  pluralPast: Word('наслаждались', 7),
  imperativeInformal: Word('наслаждайся', 7),
  imperativeFormal: Word('наслаждайтесь', 7),
  imperfect: ['насладиться'],
};

perfectVerbs.set(наслаждаться.name.text, наслаждаться);

export { наслаждаться };