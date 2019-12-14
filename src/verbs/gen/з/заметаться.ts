import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заметаться: PerfectVerb = {
  name: Word('заметаться', 5),
  singular1stPerson: Word('замечусь', 5),
  singular2ndPerson: Word('замечешься', 3),
  singular3rdPerson: Word('замечется', 3),
  plural1stPerson: Word('замечемся', 3),
  plural2ndPerson: Word('замечетесь', 3),
  plural3rdPerson: Word('замечутся', 3),
  masculinePast: Word('заметался', 5),
  femininePast: Word('заметалась', 5),
  neuterPast: Word('заметалось', 5),
  pluralPast: Word('заметались', 5),
  imperativeInformal: Word('замечись', 5),
  imperativeFormal: Word('замечитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заметаться.name.text, заметаться);

export { заметаться };