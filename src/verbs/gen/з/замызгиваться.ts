import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замызгиваться: PerfectVerb = {
  name: Word('замызгиваться', 3),
  singular1stPerson: Word('замызгиваюсь', 3),
  singular2ndPerson: Word('замызгиваешься', 3),
  singular3rdPerson: Word('замызгивается', 3),
  plural1stPerson: Word('замызгиваемся', 3),
  plural2ndPerson: Word('замызгиваетесь', 3),
  plural3rdPerson: Word('замызгиваются', 3),
  masculinePast: Word('замызгивался', 3),
  femininePast: Word('замызгивалась', 3),
  neuterPast: Word('замызгивалось', 3),
  pluralPast: Word('замызгивались', 3),
  imperativeInformal: Word('замызгивайся', 3),
  imperativeFormal: Word('замызгивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замызгиваться.name.text, замызгиваться);

export { замызгиваться };