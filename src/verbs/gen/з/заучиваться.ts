import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заучиваться: PerfectVerb = {
  name: Word('заучиваться', 2),
  singular1stPerson: Word('заучиваюсь', 2),
  singular2ndPerson: Word('заучиваешься', 2),
  singular3rdPerson: Word('заучивается', 2),
  plural1stPerson: Word('заучиваемся', 2),
  plural2ndPerson: Word('заучиваетесь', 2),
  plural3rdPerson: Word('заучиваются', 2),
  masculinePast: Word('заучивался', 2),
  femininePast: Word('заучивалась', 2),
  neuterPast: Word('заучивалось', 2),
  pluralPast: Word('заучивались', 2),
  imperativeInformal: Word('заучивайся', 2),
  imperativeFormal: Word('заучивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(заучиваться.name.text, заучиваться);

export { заучиваться };