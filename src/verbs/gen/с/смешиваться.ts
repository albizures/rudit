import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смешиваться: PerfectVerb = {
  name: Word('смешиваться', 2),
  singular1stPerson: Word('смешиваюсь', 2),
  singular2ndPerson: Word('смешиваешься', 2),
  singular3rdPerson: Word('смешивается', 2),
  plural1stPerson: Word('смешиваемся', 2),
  plural2ndPerson: Word('смешиваетесь', 2),
  plural3rdPerson: Word('смешиваются', 2),
  masculinePast: Word('смешивался', 2),
  femininePast: Word('смешивалась', 2),
  neuterPast: Word('смешивалось', 2),
  pluralPast: Word('смешивались', 2),
  imperativeInformal: Word('смешивайся', 2),
  imperativeFormal: Word('смешивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(смешиваться.name.text, смешиваться);

export { смешиваться };