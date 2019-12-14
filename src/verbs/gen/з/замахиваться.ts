import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замахиваться: PerfectVerb = {
  name: Word('замахиваться', 3),
  singular1stPerson: Word('замахиваюсь', 3),
  singular2ndPerson: Word('замахиваешься', 3),
  singular3rdPerson: Word('замахивается', 3),
  plural1stPerson: Word('замахиваемся', 3),
  plural2ndPerson: Word('замахиваетесь', 3),
  plural3rdPerson: Word('замахиваются', 3),
  masculinePast: Word('замахивался', 3),
  femininePast: Word('замахивалась', 3),
  neuterPast: Word('замахивалось', 3),
  pluralPast: Word('замахивались', 3),
  imperativeInformal: Word('замахивайся', 3),
  imperativeFormal: Word('замахивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замахиваться.name.text, замахиваться);

export { замахиваться };