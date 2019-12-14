import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспучиваться: PerfectVerb = {
  name: Word('вспучиваться', 3),
  singular1stPerson: Word('вспучиваюсь', 3),
  singular2ndPerson: Word('вспучиваешься', 3),
  singular3rdPerson: Word('вспучивается', 3),
  plural1stPerson: Word('вспучиваемся', 3),
  plural2ndPerson: Word('вспучиваетесь', 3),
  plural3rdPerson: Word('вспучиваются', 3),
  masculinePast: Word('вспучивался', 3),
  femininePast: Word('вспучивалась', 3),
  neuterPast: Word('вспучивалось', 3),
  pluralPast: Word('вспучивались', 3),
  imperativeInformal: Word('вспучивайся', 3),
  imperativeFormal: Word('вспучивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вспучиваться.name.text, вспучиваться);

export { вспучиваться };