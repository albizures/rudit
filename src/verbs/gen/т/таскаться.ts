import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таскаться: PerfectVerb = {
  name: Word('таскаться', 4),
  singular1stPerson: Word('таскаюсь', 4),
  singular2ndPerson: Word('таскаешься', 4),
  singular3rdPerson: Word('таскается', 4),
  plural1stPerson: Word('таскаемся', 4),
  plural2ndPerson: Word('таскаетесь', 4),
  plural3rdPerson: Word('таскаются', 4),
  masculinePast: Word('таскался', 4),
  femininePast: Word('таскалась', 4),
  neuterPast: Word('таскалось', 4),
  pluralPast: Word('таскались', 4),
  imperativeInformal: Word('таскайся', 4),
  imperativeFormal: Word('таскайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(таскаться.name.text, таскаться);

export { таскаться };