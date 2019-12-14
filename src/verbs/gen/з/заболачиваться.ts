import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболачиваться: PerfectVerb = {
  name: Word('заболачиваться', 5),
  singular1stPerson: Word('заболачиваюсь', 5),
  singular2ndPerson: Word('заболачиваешься', 5),
  singular3rdPerson: Word('заболачивается', 5),
  plural1stPerson: Word('заболачиваемся', 5),
  plural2ndPerson: Word('заболачиваетесь', 5),
  plural3rdPerson: Word('заболачиваются', 5),
  masculinePast: Word('заболачивался', 5),
  femininePast: Word('заболачивалась', 5),
  neuterPast: Word('заболачивалось', 5),
  pluralPast: Word('заболачивались', 5),
  imperativeInformal: Word('заболачивайся', 5),
  imperativeFormal: Word('заболачивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заболачиваться.name.text, заболачиваться);

export { заболачиваться };