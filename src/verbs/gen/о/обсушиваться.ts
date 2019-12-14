import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсушиваться: PerfectVerb = {
  name: Word('обсушиваться', 3),
  singular1stPerson: Word('обсушиваюсь', 3),
  singular2ndPerson: Word('обсушиваешься', 3),
  singular3rdPerson: Word('обсушивается', 3),
  plural1stPerson: Word('обсушиваемся', 3),
  plural2ndPerson: Word('обсушиваетесь', 3),
  plural3rdPerson: Word('обсушиваются', 3),
  masculinePast: Word('обсушивался', 3),
  femininePast: Word('обсушивалась', 3),
  neuterPast: Word('обсушивалось', 3),
  pluralPast: Word('обсушивались', 3),
  imperativeInformal: Word('обсушивайся', 3),
  imperativeFormal: Word('обсушивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обсушиваться.name.text, обсушиваться);

export { обсушиваться };