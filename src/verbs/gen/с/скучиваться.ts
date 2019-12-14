import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скучиваться: PerfectVerb = {
  name: Word('скучиваться', 2),
  singular1stPerson: Word('скучиваюсь', 2),
  singular2ndPerson: Word('скучиваешься', 2),
  singular3rdPerson: Word('скучивается', 2),
  plural1stPerson: Word('скучиваемся', 2),
  plural2ndPerson: Word('скучиваетесь', 2),
  plural3rdPerson: Word('скучиваются', 2),
  masculinePast: Word('скучивался', 2),
  femininePast: Word('скучивалась', 2),
  neuterPast: Word('скучивалось', 2),
  pluralPast: Word('скучивались', 2),
  imperativeInformal: Word('скучивайся', 2),
  imperativeFormal: Word('скучивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(скучиваться.name.text, скучиваться);

export { скучиваться };