import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улетучиваться: PerfectVerb = {
  name: Word('улетучиваться', 4),
  singular1stPerson: Word('улетучиваюсь', 4),
  singular2ndPerson: Word('улетучиваешься', 4),
  singular3rdPerson: Word('улетучивается', 4),
  plural1stPerson: Word('улетучиваемся', 4),
  plural2ndPerson: Word('улетучиваетесь', 4),
  plural3rdPerson: Word('улетучиваются', 4),
  masculinePast: Word('улетучивался', 4),
  femininePast: Word('улетучивалась', 4),
  neuterPast: Word('улетучивалось', 4),
  pluralPast: Word('улетучивались', 4),
  imperativeInformal: Word('улетучивайся', 4),
  imperativeFormal: Word('улетучивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(улетучиваться.name.text, улетучиваться);

export { улетучиваться };