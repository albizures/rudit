import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшучиваться: PerfectVerb = {
  name: Word('отшучиваться', 3),
  singular1stPerson: Word('отшучиваюсь', 3),
  singular2ndPerson: Word('отшучиваешься', 3),
  singular3rdPerson: Word('отшучивается', 3),
  plural1stPerson: Word('отшучиваемся', 3),
  plural2ndPerson: Word('отшучиваетесь', 3),
  plural3rdPerson: Word('отшучиваются', 3),
  masculinePast: Word('отшучивался', 3),
  femininePast: Word('отшучивалась', 3),
  neuterPast: Word('отшучивалось', 3),
  pluralPast: Word('отшучивались', 3),
  imperativeInformal: Word('отшучивайся', 3),
  imperativeFormal: Word('отшучивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отшучиваться.name.text, отшучиваться);

export { отшучиваться };