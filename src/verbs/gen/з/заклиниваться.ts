import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклиниваться: PerfectVerb = {
  name: Word('заклиниваться', 4),
  singular1stPerson: Word('заклиниваюсь', 4),
  singular2ndPerson: Word('заклиниваешься', 4),
  singular3rdPerson: Word('заклинивается', 4),
  plural1stPerson: Word('заклиниваемся', 4),
  plural2ndPerson: Word('заклиниваетесь', 4),
  plural3rdPerson: Word('заклиниваются', 4),
  masculinePast: Word('заклинивался', 4),
  femininePast: Word('заклинивалась', 4),
  neuterPast: Word('заклинивалось', 4),
  pluralPast: Word('заклинивались', 4),
  imperativeInformal: Word('заклинивайся', 4),
  imperativeFormal: Word('заклинивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заклиниваться.name.text, заклиниваться);

export { заклиниваться };