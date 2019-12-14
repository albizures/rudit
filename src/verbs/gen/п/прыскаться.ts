import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прыскаться: PerfectVerb = {
  name: Word('прыскаться', 2),
  singular1stPerson: Word('прыскаюсь', 2),
  singular2ndPerson: Word('прыскаешься', 2),
  singular3rdPerson: Word('прыскается', 2),
  plural1stPerson: Word('прыскаемся', 2),
  plural2ndPerson: Word('прыскаетесь', 2),
  plural3rdPerson: Word('прыскаются', 2),
  masculinePast: Word('прыскался', 2),
  femininePast: Word('прыскалась', 2),
  neuterPast: Word('прыскалось', 2),
  pluralPast: Word('прыскались', 2),
  imperativeInformal: Word('прыскайся', 2),
  imperativeFormal: Word('прыскайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(прыскаться.name.text, прыскаться);

export { прыскаться };