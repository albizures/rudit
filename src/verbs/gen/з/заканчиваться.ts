import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заканчиваться: PerfectVerb = {
  name: Word('заканчиваться', 3),
  singular1stPerson: Word('заканчиваюсь', 3),
  singular2ndPerson: Word('заканчиваешься', 3),
  singular3rdPerson: Word('заканчивается', 3),
  plural1stPerson: Word('заканчиваемся', 3),
  plural2ndPerson: Word('заканчиваетесь', 3),
  plural3rdPerson: Word('заканчиваются', 3),
  masculinePast: Word('заканчивался', 3),
  femininePast: Word('заканчивалась', 3),
  neuterPast: Word('заканчивалось', 3),
  pluralPast: Word('заканчивались', 3),
  imperativeInformal: Word('заканчивайся', 3),
  imperativeFormal: Word('заканчивайтесь', 3),
  imperfect: ['закончиться'],
};

perfectVerbs.set(заканчиваться.name.text, заканчиваться);

export { заканчиваться };