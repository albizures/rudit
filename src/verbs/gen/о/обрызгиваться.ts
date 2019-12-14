import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрызгиваться: PerfectVerb = {
  name: Word('обрызгиваться', 3),
  singular1stPerson: Word('обрызгиваюсь', 3),
  singular2ndPerson: Word('обрызгиваешься', 3),
  singular3rdPerson: Word('обрызгивается', 3),
  plural1stPerson: Word('обрызгиваемся', 3),
  plural2ndPerson: Word('обрызгиваетесь', 3),
  plural3rdPerson: Word('обрызгиваются', 3),
  masculinePast: Word('обрызгивался', 3),
  femininePast: Word('обрызгивалась', 3),
  neuterPast: Word('обрызгивалось', 3),
  pluralPast: Word('обрызгивались', 3),
  imperativeInformal: Word('обрызгивайся', 3),
  imperativeFormal: Word('обрызгивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обрызгиваться.name.text, обрызгиваться);

export { обрызгиваться };