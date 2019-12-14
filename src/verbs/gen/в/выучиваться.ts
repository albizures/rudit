import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выучиваться: PerfectVerb = {
  name: Word('выучиваться', 2),
  singular1stPerson: Word('выучиваюсь', 2),
  singular2ndPerson: Word('выучиваешься', 2),
  singular3rdPerson: Word('выучивается', 2),
  plural1stPerson: Word('выучиваемся', 2),
  plural2ndPerson: Word('выучиваетесь', 2),
  plural3rdPerson: Word('выучиваются', 2),
  masculinePast: Word('выучивался', 2),
  femininePast: Word('выучивалась', 2),
  neuterPast: Word('выучивалось', 2),
  pluralPast: Word('выучивались', 2),
  imperativeInformal: Word('выучивайся', 2),
  imperativeFormal: Word('выучивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(выучиваться.name.text, выучиваться);

export { выучиваться };