import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доучиваться: PerfectVerb = {
  name: Word('доучиваться', 2),
  singular1stPerson: Word('доучиваюсь', 2),
  singular2ndPerson: Word('доучиваешься', 2),
  singular3rdPerson: Word('доучивается', 2),
  plural1stPerson: Word('доучиваемся', 2),
  plural2ndPerson: Word('доучиваетесь', 2),
  plural3rdPerson: Word('доучиваются', 2),
  masculinePast: Word('доучивался', 2),
  femininePast: Word('доучивалась', 2),
  neuterPast: Word('доучивалось', 2),
  pluralPast: Word('доучивались', 2),
  imperativeInformal: Word('доучивайся', 2),
  imperativeFormal: Word('доучивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(доучиваться.name.text, доучиваться);

export { доучиваться };