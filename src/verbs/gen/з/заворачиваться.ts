import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заворачиваться: PerfectVerb = {
  name: Word('заворачиваться', 5),
  singular1stPerson: Word('заворачиваюсь', 5),
  singular2ndPerson: Word('заворачиваешься', 5),
  singular3rdPerson: Word('заворачивается', 5),
  plural1stPerson: Word('заворачиваемся', 5),
  plural2ndPerson: Word('заворачиваетесь', 5),
  plural3rdPerson: Word('заворачиваются', 5),
  masculinePast: Word('заворачивался', 5),
  femininePast: Word('заворачивалась', 5),
  neuterPast: Word('заворачивалось', 5),
  pluralPast: Word('заворачивались', 5),
  imperativeInformal: Word('заворачивайся', 5),
  imperativeFormal: Word('заворачивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заворачиваться.name.text, заворачиваться);

export { заворачиваться };