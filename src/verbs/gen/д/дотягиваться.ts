import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотягиваться: PerfectVerb = {
  name: Word('дотягиваться', 3),
  singular1stPerson: Word('дотягиваюсь', 3),
  singular2ndPerson: Word('дотягиваешься', 3),
  singular3rdPerson: Word('дотягивается', 3),
  plural1stPerson: Word('дотягиваемся', 3),
  plural2ndPerson: Word('дотягиваетесь', 3),
  plural3rdPerson: Word('дотягиваются', 3),
  masculinePast: Word('дотягивался', 3),
  femininePast: Word('дотягивалась', 3),
  neuterPast: Word('дотягивалось', 3),
  pluralPast: Word('дотягивались', 3),
  imperativeInformal: Word('дотягивайся', 3),
  imperativeFormal: Word('дотягивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(дотягиваться.name.text, дотягиваться);

export { дотягиваться };