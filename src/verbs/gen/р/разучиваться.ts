import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разучиваться: PerfectVerb = {
  name: Word('разучиваться', 3),
  singular1stPerson: Word('разучиваюсь', 3),
  singular2ndPerson: Word('разучиваешься', 3),
  singular3rdPerson: Word('разучивается', 3),
  plural1stPerson: Word('разучиваемся', 3),
  plural2ndPerson: Word('разучиваетесь', 3),
  plural3rdPerson: Word('разучиваются', 3),
  masculinePast: Word('разучивался', 3),
  femininePast: Word('разучивалась', 3),
  neuterPast: Word('разучивалось', 3),
  pluralPast: Word('разучивались', 3),
  imperativeInformal: Word('разучивайся', 3),
  imperativeFormal: Word('разучивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(разучиваться.name.text, разучиваться);

export { разучиваться };