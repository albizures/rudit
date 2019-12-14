import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотрагиваться: PerfectVerb = {
  name: Word('дотрагиваться', 4),
  singular1stPerson: Word('дотрагиваюсь', 4),
  singular2ndPerson: Word('дотрагиваешься', 4),
  singular3rdPerson: Word('дотрагивается', 4),
  plural1stPerson: Word('дотрагиваемся', 4),
  plural2ndPerson: Word('дотрагиваетесь', 4),
  plural3rdPerson: Word('дотрагиваются', 4),
  masculinePast: Word('дотрагивался', 4),
  femininePast: Word('дотрагивалась', 4),
  neuterPast: Word('дотрагивалось', 4),
  pluralPast: Word('дотрагивались', 4),
  imperativeInformal: Word('дотрагивайся', 4),
  imperativeFormal: Word('дотрагивайтесь', 4),
  imperfect: ['дотронуться'],
};

perfectVerbs.set(дотрагиваться.name.text, дотрагиваться);

export { дотрагиваться };