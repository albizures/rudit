import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заступаться: PerfectVerb = {
  name: Word('заступаться', 6),
  singular1stPerson: Word('заступаюсь', 6),
  singular2ndPerson: Word('заступаешься', 6),
  singular3rdPerson: Word('заступается', 6),
  plural1stPerson: Word('заступаемся', 6),
  plural2ndPerson: Word('заступаетесь', 6),
  plural3rdPerson: Word('заступаются', 6),
  masculinePast: Word('заступался', 6),
  femininePast: Word('заступалась', 6),
  neuterPast: Word('заступалось', 6),
  pluralPast: Word('заступались', 6),
  imperativeInformal: Word('заступайся', 6),
  imperativeFormal: Word('заступайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заступаться.name.text, заступаться);

export { заступаться };