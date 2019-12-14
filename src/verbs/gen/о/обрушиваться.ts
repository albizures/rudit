import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрушиваться: PerfectVerb = {
  name: Word('обрушиваться', 3),
  singular1stPerson: Word('обрушиваюсь', 3),
  singular2ndPerson: Word('обрушиваешься', 3),
  singular3rdPerson: Word('обрушивается', 3),
  plural1stPerson: Word('обрушиваемся', 3),
  plural2ndPerson: Word('обрушиваетесь', 3),
  plural3rdPerson: Word('обрушиваются', 3),
  masculinePast: Word('обрушивался', 3),
  femininePast: Word('обрушивалась', 3),
  neuterPast: Word('обрушивалось', 3),
  pluralPast: Word('обрушивались', 3),
  imperativeInformal: Word('обрушивайся', 3),
  imperativeFormal: Word('обрушивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обрушиваться.name.text, обрушиваться);

export { обрушиваться };