import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассучиваться: PerfectVerb = {
  name: Word('рассучиваться', 4),
  singular1stPerson: Word('рассучиваюсь', 4),
  singular2ndPerson: Word('рассучиваешься', 4),
  singular3rdPerson: Word('рассучивается', 4),
  plural1stPerson: Word('рассучиваемся', 4),
  plural2ndPerson: Word('рассучиваетесь', 4),
  plural3rdPerson: Word('рассучиваются', 4),
  masculinePast: Word('рассучивался', 4),
  femininePast: Word('рассучивалась', 4),
  neuterPast: Word('рассучивалось', 4),
  pluralPast: Word('рассучивались', 4),
  imperativeInformal: Word('рассучивайся', 4),
  imperativeFormal: Word('рассучивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассучиваться.name.text, рассучиваться);

export { рассучиваться };