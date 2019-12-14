import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклеиваться: PerfectVerb = {
  name: Word('заклеиваться', 4),
  singular1stPerson: Word('заклеиваюсь', 4),
  singular2ndPerson: Word('заклеиваешься', 4),
  singular3rdPerson: Word('заклеивается', 4),
  plural1stPerson: Word('заклеиваемся', 4),
  plural2ndPerson: Word('заклеиваетесь', 4),
  plural3rdPerson: Word('заклеиваются', 4),
  masculinePast: Word('заклеивался', 4),
  femininePast: Word('заклеивалась', 4),
  neuterPast: Word('заклеивалось', 4),
  pluralPast: Word('заклеивались', 4),
  imperativeInformal: Word('заклеивайся', 4),
  imperativeFormal: Word('заклеивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заклеиваться.name.text, заклеиваться);

export { заклеиваться };