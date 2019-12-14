import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состязаться: PerfectVerb = {
  name: Word('состязаться', 6),
  singular1stPerson: Word('состязаюсь', 6),
  singular2ndPerson: Word('состязаешься', 6),
  singular3rdPerson: Word('состязается', 6),
  plural1stPerson: Word('состязаемся', 6),
  plural2ndPerson: Word('состязаетесь', 6),
  plural3rdPerson: Word('состязаются', 6),
  masculinePast: Word('состязался', 6),
  femininePast: Word('состязалась', 6),
  neuterPast: Word('состязалось', 6),
  pluralPast: Word('состязались', 6),
  imperativeInformal: Word('состязайся', 6),
  imperativeFormal: Word('состязайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(состязаться.name.text, состязаться);

export { состязаться };