import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклиниваться: PerfectVerb = {
  name: Word('вклиниваться', 3),
  singular1stPerson: Word('вклиниваюсь', 3),
  singular2ndPerson: Word('вклиниваешься', 3),
  singular3rdPerson: Word('вклинивается', 3),
  plural1stPerson: Word('вклиниваемся', 3),
  plural2ndPerson: Word('вклиниваетесь', 3),
  plural3rdPerson: Word('вклиниваются', 3),
  masculinePast: Word('вклинивался', 3),
  femininePast: Word('вклинивалась', 3),
  neuterPast: Word('вклинивалось', 3),
  pluralPast: Word('вклинивались', 3),
  imperativeInformal: Word('вклинивайся', 3),
  imperativeFormal: Word('вклинивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вклиниваться.name.text, вклиниваться);

export { вклиниваться };